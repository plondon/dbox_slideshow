import React, { Component } from "react";
import * as Dropbox from "dropbox";
import { getFolders, getFiles } from "../../utils";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    if (props.location.state && props.location.state.accessToken) {
      this.state = {
        dbxUrl: new Dropbox.Dropbox({
          accessToken: props.location.state.accessToken
        })
      };
    } else {
      props.history.push({
        pathname: "/"
      });
    }
  }

  componentDidMount() {
    const { dbxUrl } = this.state;
    dbxUrl.filesListFolder({ path: "" }).then(response => {
      this.setState({ folders: getFolders(response) });
    });
  }

  initSlideshow(path) {
    this.setState({ folders: null });
    const { dbxUrl } = this.state;
    const { history } = this.props;
    dbxUrl.filesListFolder({ path }).then(response => {
      const files = getFiles(response);
      const images = [];
      files.forEach(file => {
        dbxUrl.filesGetTemporaryLink({ path: file.path_lower }).then(image => {
          images.push(image);
          if (images.length === files.length) {
            history.push({
              pathname: "/slideshow",
              state: { images }
            });
          }
        });
      });
    });
  }

  render() {
    const { folders } = this.state;
    return folders ? (
      <ul>
        {folders.map(folder => {
          return (
            <li
              onClick={() => {
                this.initSlideshow(folder.path_lower);
              }}
            >
              {folder.name}
            </li>
          );
        })}
      </ul>
    ) : (
      <div>Loading</div>
    );
  }
}
export default Dashboard;

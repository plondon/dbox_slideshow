import React, { Component } from "react";
import * as Dropbox from "dropbox";
import * as qs from "qs";
import "./App.css";

const dbx = new Dropbox.Dropbox({ clientId: "koee38ql2uh6axd" });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUrl: ""
    };
  }

  componentDidMount() {
    const { access_token } = qs.parse(window.location.hash.substr(1));
    if (access_token) {
      this.setState({ authenticated: true });
      const dbxUrl = new Dropbox.Dropbox({ accessToken: access_token });
      dbxUrl
        .filesListFolder({ path: "/38 @ noyack bay memorial weekend 2017" })
        .then(response => {
          console.log(response);
        });
      dbxUrl
        .filesGetTemporaryLink({
          path: "/38 @ noyack bay memorial weekend 2017/dsc_6086 copy copy.jpg"
        })
        .then(response => {
          this.setState({ image: response.link });
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      const authUrl = dbx.getAuthenticationUrl("http://localhost:3000/auth");
      this.setState({ authUrl });
    }
  }

  render() {
    return (
      <div className="App">
        {!this.state.authenticated && (
          <a href={this.state.authUrl} target="_blank">
            Authenticate
          </a>
        )}
        {this.state.image && <img src={this.state.image} />}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import * as Dropbox from "dropbox";
import * as qs from "qs";

class Auth extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    const { access_token } = qs.parse(location.hash.substr(1));
    if (access_token) {
      history.push({
        pathname: "/dashboard",
        state: { accessToken: access_token }
      });
    } else {
      history.push({
        pathname: "/"
      });
    }
  }
  render() {
    return null;
  }
}
export default Auth;

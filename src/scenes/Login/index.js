import React, { Component } from "react";
import * as Dropbox from "dropbox";

const dbx = new Dropbox.Dropbox({ clientId: "koee38ql2uh6axd" });

class Login extends Component {
  constructor(props) {
    super(props);
    const authUrl = dbx.getAuthenticationUrl(
      "https://dbox-slideshow.firebaseapp.com/auth/"
    );
    this.state = {
      authUrl
    };
  }

  render() {
    const { authUrl } = this.state;
    return <a href={authUrl}>Log In</a>;
  }
}
export default Login;

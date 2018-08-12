import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Auth from "./scenes/Auth";
import Login from "./scenes/Login";
import Dashboard from "./scenes/Dashboard";
import Slideshow from "./scenes/Slideshow";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/slideshow" component={Slideshow} />
        <Route path="/auth" component={Auth} />
        <Route component={Login} />
      </Switch>
    );
  }
}

export default App;

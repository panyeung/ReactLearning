import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Films from "./views/Film.jsx";
import Center from "./views/Center";
import Cinemas from "./views/Cinemas";
export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Route path="/films" component={Films}></Route>
          <Route path="/cinemas" component={Cinemas}></Route>
          <Route path="/center" component={Center}></Route>
        </HashRouter>
      </div>
    );
  }
}

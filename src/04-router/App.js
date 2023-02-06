import React, { Component } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Films from "./views/Film.jsx";
import Center from "./views/Center";
import Cinemas from "./views/Cinemas";

function NotFound() {
  return <div>404</div>;
}
export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          {/*Switch work similarly to the normal switch. It will break out after find a match */}
          <Switch>
            <Route path="/films" component={Films}></Route>
            <Route path="/cinemas" component={Cinemas}></Route>
            <Route path="/center" component={Center}></Route>
            {/* default redirect to the home page. By default it will use ambiguous match */}
            {/* <Redirect from="/" to="/films" /> */}
            {/* change it to exact match. Any other will send it to 404 */}
            <Redirect from="/" to="/films" exact></Redirect>
            <Route component={NotFound}></Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

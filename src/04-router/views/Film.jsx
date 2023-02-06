import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CommingSoon from "./Films/CommingSoon";
import NowPlaying from "./Films/NowPlaying";
export default function Film() {
  return (
    <div>
      Film
      {/* NestedRoute */}
      <Switch>
        <Route path="/films/commingSoon" component={CommingSoon}></Route>
        <Route path="/films/nowPlaying" component={NowPlaying}></Route>
        <Redirect from="/films" to="/films/nowPlaying"></Redirect>
      </Switch>
    </div>
  );
}

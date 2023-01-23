import React, { Component } from "react";
import "./css/01-index.css";

export default class App extends Component {
  render() {
    var myname = "Yeung";
    var obj = {
      background: "yellow",
    };
    return (
      <div>
        <div style={obj}>
          {10 + 20}-{myname}
          {10 > 20 ? "aaa" : "bbb"}
        </div>
        <div style={{ background: "red" }}>This is red</div>
        <div className="active">333333333</div>
      </div>
    );
  }
}

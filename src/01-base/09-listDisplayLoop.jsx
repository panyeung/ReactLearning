import React, { Component } from "react";

export default class App extends Component {
  state = {
    list: ["111", "222", "3333"],
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

/*
    from original js - map
    take in a function with return value.

    The purpose of key is for reusability,
    and rearrange. Improve efficiency.
*/

var list = ["aa", "bb", "cc"];
var newlist = list.map((item) => "pan");

// output ["pan","pan","pan"]
console.log(newlist);

var list = ["aa", "bb", "cc"];
var liList = list.map((item) => `<li>${item}<li>`);

// output <li>aa<li><li>bb<li><li>cc<li>
console.log(liList.join(""));

import React, { Component } from "react";

export default class App extends Component {
  state = {
    list: ["111", "222", "333", "444", "555"],
  };

  componentWillUnmount() {
    // console.log(document.querySelectorAll("li"));
  }

  componentDidMount() {
    // console.log(document.querySelectorAll("li"));
  }
  render() {
    return (
      <div>
        <div id="wrapper">
          <ul>
            {this.state.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.text = "33333333";
          }}
        >
          Child Click
        </button>
        Child -{this.props.text}
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    text: "11111",
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              text: "22222",
            });
          }}
        >
          Parent Click
        </button>
        <Child text={this.state.text}></Child>
      </div>
    );
  }
}

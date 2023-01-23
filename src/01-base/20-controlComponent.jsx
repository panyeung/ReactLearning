import React, { Component } from "react";

export default class App extends Component {
  state = { userName: "pan" };

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <input
          type="text"
          value={this.state.userName}
          //   onInput and onChange work the same in this case
          //onInput is native JS, onChange is React way.
          // both case behave similarly
          onChange={(evt) => {
            console.log(evt.target.value);
            this.setState({ userName: evt.target.value });
          }}
        ></input>
        <button
          onClick={() => {
            console.log(this.state.userName);
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            this.setState({ userName: "" });
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class App extends Component {
  myusername = React.createRef();
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        {/* Change value -> default value*/}
        <input type="text" value="pan" ref={this.myusername}></input>
        <button
          onClick={() => {
            console.log(this.myusername.current.value);
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            this.myusername.current.value = "";
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}

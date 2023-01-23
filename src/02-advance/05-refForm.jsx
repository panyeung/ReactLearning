import { render } from "@testing-library/react";
import React, { Component } from "react";

class Field extends Component {
  state = {
    value: "",
  };

  clear() {
    this.setState({
      value: "",
    });
  }
  render() {
    return (
      <div>
        <label style={{ background: "yellow" }}>{this.props.label}</label>
        <input
          type={this.props.type}
          onChange={(evt) => {
            this.setState({ value: evt.target.value });
          }}
          value={this.state.value}
        ></input>
      </div>
    );
  }
}
export default class App extends Component {
  userName = React.createRef();
  password = React.createRef();
  render() {
    return (
      <div>
        <h1>Login page</h1>
        <Field label="UserName" type="text" ref={this.userName} />
        <Field label="Password" type="password" ref={this.password} />
        <button
          onClick={() => {
            console.log(
              this.userName.current.state.value,
              this.password.current.state.value
            );
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            this.userName.current.clear();
            this.password.current.clear();
          }}
        >
          Cancel
        </button>
      </div>
    );
  }
}

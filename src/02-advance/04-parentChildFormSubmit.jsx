import { render } from "@testing-library/react";
import React, { Component } from "react";

class Field extends Component {
  render() {
    return (
      <div>
        <label style={{ background: "yellow" }}>{this.props.label}</label>
        <input
          type={this.props.type}
          onChange={(evt) => {
            console.log(evt.target.value);
            this.props.onChangeEvent(evt.target.value);
          }}
          value={this.props.value}
        ></input>
      </div>
    );
  }
}
export default class App extends Component {
  state = {
    userName: "",
    password: "",
  };
  render() {
    return (
      <div>
        <h1>Login page</h1>
        <Field
          label="UserName"
          type="text"
          value={this.state.userName}
          onChangeEvent={(value) => {
            this.setState({
              userName: value,
            });
          }}
        />
        <Field
          label="Password"
          type="password"
          value={this.state.password}
          onChangeEvent={(value) => {
            this.setState({
              password: value,
            });
          }}
        />
        <button
          onClick={() => {
            console.log(this.state.userName, this.state.password);
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            console.log("Cancel");
            this.setState({
              userName: "",
              password: "",
            });
          }}
        >
          Cancel
        </button>
      </div>
    );
  }
}

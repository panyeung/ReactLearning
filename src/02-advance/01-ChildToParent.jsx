import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div style={{ background: "red" }}>
        <button
          onClick={() => {
            console.log("Child recieved Parent setFunction", this.props.event);
            this.props.event(); //Calling the parent setState Function
          }}
        >
          Click
        </button>
        <span>Navbar</span>
      </div>
    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div style={{ background: "yellow", width: "200px" }}>
        <ul>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
        </ul>
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    isShow: true,
  };
  render() {
    return (
      <div>
        <Navbar
          event={() => {
            console.log("Parent defined event function");
            this.setState({
              isShow: !this.state.isShow,
            });
          }}
        ></Navbar>
        {this.state.isShow && <Sidebar></Sidebar>}
      </div>
    );
  }
}

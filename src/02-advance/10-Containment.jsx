import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        Child
        {/* Slot: Think of it as leaving empty space*/}
        {/* this.props.children = will show all 3 altogether */}
        {this.props.children[0]}
        {this.props.children[1]}
        {this.props.children[2]}
      </div>
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <div>
        <Child>
          <div>11111</div>
          {/* This div will not show, will get replace by the child component */}
          {/* If you leave a slot, it will start show again. */}
          {/* This div is inside the props.children */}
          <div>2222</div>
          <div>3333</div>
        </Child>
      </div>
    );
  }
}

// 1. For reuse

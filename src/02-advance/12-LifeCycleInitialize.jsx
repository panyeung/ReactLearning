import React, { Component } from "react";

export default class App extends Component {
  state = {
    myName: "preston",
  };
  componentWillMount() {
    console.log("first time will mount");
    // last chance to change state before DOM.
    this.setState({
      myName: "pan",
    });
    //initial data logic
  }

  componentDidMount() {
    console.log("first time DidMount");
    //https, ajax request
    //subscriber and consumber
    //set Interval
    //Based on already created DOM to initialize.
  }
  render() {
    console.log("render");
    return <div>{this.state.myName}</div>;
  }
}

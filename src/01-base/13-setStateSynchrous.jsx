import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 1,
  };
  render() {
    return (
      <div>
        {this.state.count}

        <button onClick={this.handleAdd1}>add1</button>
        <button onClick={this.handleAdd2}>add2</button>
      </div>
    );
  }

  handleAdd1 = () => {
    //We do not know when will the setState will get execute.
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
    this.setState({ count: this.state.count + 2 });
    console.log(this.state.count);
    this.setState({ count: this.state.count + 3 });
    console.log(this.state.count);

    /*
        SetState is asynchronous state. 
        When you set the state, it does not immediately
        update

        Summary:
        1) When setState is located within synchronous logic, it will asynchronous
        update the state. (Handle1)

        2) When setState is located within asynchronous logic, it will synchronous update
        the dom. (Handle2)
    */
  };

  handleAdd2 = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      //State update finish
      console.log("Inside the callback#1:", this.state.count);
    });
    console.log(this.state.count);

    //the second parameter of setState is a callback function,it will
    //execute
  };
}

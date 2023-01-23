import React, { Component } from "react";

export default class App extends Component {
  state = {
    myname: "preston",
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              myname: "pan",
            });
          }}
        >
          click
        </button>
        {this.state.myname}
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    //return true; //true mean should update. false mean not update

    //this.state.myname => represent the old state.
    //nextState represent the new state.
    //exactly opposite of componentDidUpdate
    //We cannot check state directly, but we can change it to string and check.
    if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
      return true;
    }
    return false;
  }
  componentWillUpdate() {
    console.log("Component Will update");
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }
}

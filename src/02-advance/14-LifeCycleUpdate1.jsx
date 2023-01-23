import React, { Component } from "react";

export default class App extends Component {
  componentDidMount() {}

  state = {
    myname: "pan",
  };
  render() {
    console.log("render");
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              myname: "preston",
            });
          }}
        >
          Click
        </button>
        {this.state.myname}
      </div>
    );
  }

  componentWillUpdate() {
    console.log("Component Will update");
    // Cannot change state.
  }

  componentDidUpdate(prevPros, prevState) {
    console.log("Component did update");
    // after update, we want to get the DOM to update.
  }
}

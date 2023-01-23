import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <input></input>
        <button
          onClick={() => {
            console.log("clicked");
          }}
        >
          Add1
        </button>
        <button
          onClick={
            this.handleClick
            // downside for method 2 and 3 is that this might not be
            //the one you want.
          }
        >
          Add2
        </button>
        <button onClick={this.handleClick3}>Add3</button>
        <button
          onClick={() => {
            this.handleClick4(); //recommend this way
            //allow pass parameters
          }}
        >
          Add4
        </button>
      </div>
    );
  }

  handleClick() {
    console.log("click2");
  }

  //es7 feature define function
  handleClick3 = () => {
    console.log("click3");
  };

  handleClick4 = () => {
    console.log("click4");
  };
}

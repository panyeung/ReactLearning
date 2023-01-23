import React, { Component } from "react";

export default class App extends Component {
  state = {
    mytext: true,
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              mytext: !this.state.mytext,
            });

            if (this.state.mytext) {
              console.log("Like Logic");
            } else {
              console.log("dislike Logic");
            }
          }}
        >
          {this.state.mytext ? "Like" : "Unlike"}
        </button>
      </div>
    );
  }
}

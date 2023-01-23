import React, { Component } from "react";

export default class App extends Component {
  state = {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  };

  myref = React.createRef();

  getSnapshotBeforeUpdate() {
    //get scroll height
    console.log(this.myref.current.scrollTop);
    //This value will pass to the ComponentDidUpdate method
    return this.myref.current;
  }

  componentDidUpdate(prevProps, prevState, value) {
    console.log(this.myref.current.scrollHeight);
    this.myref.current.scrollTop =
      value.scrollTop + this.myref.current.scrollHeight - value.scrollHeight;
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              list: [...[11, 12, 13, 14, 15, 16, 17], ...this.state.list],
            });
          }}
        >
          Mail
        </button>
        <h1>Mail App</h1>
        <div
          id="box"
          style={{ height: "200px", overflow: "auto" }}
          ref={this.myref}
        >
          <ul>
            {this.state.list.map((item) => (
              <li key={item} style={{ height: "100px", background: "yellow" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

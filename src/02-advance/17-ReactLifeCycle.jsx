import React, { Component } from "react";

class Child extends Component {
  render() {
    return <div>Child</div>;
  }

  //first place to recieved parent props, can use props to do ajax logic
  componentWillReceiveProps(nextProps) {
    //will call this method when parent update its state. Even when the child
    //not change.
    console.log("componentWillReceiveProps---oldprops", this.props.text);
    //this.props.text will get the old props.
    //nextProps represent the newProps
    console.log("componentWillReceiveProps----newProps", nextProps);
  }
}
export default class App extends Component {
  state = {
    text: "1111",
  };
  render() {
    return (
      <div>
        {this.state.text}
        <button
          onClick={() => {
            this.setState({
              text: "2222222",
            });
          }}
        >
          Click
        </button>
        <Child text={this.state.text}></Child>
      </div>
    );
  }
}

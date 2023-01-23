import React, { Component } from "react";

export default class App extends Component {
  //new way of doing ref using createRef()
  myref = React.createRef();
  render() {
    return (
      <div>
        <input ref="mytext" />
        <input ref={this.myref} />
        <button
          onClick={() => {
            //ref will get the "input" html tag (it is deprecated)
            //use this.refs.mytext.value to get the value

            //potential bugs might be that multiple ref with
            //"mytext". This will only take the value of the last
            //ref.
            console.log("click1", this.refs);
          }}
        >
          add1
        </button>
        <button
          onClick={() => {
            //this.myref.current will get you the Dom element
            console.log("Click2 ", this.myref.current.value);
          }}
        >
          Add2
        </button>
      </div>
    );
  }
}

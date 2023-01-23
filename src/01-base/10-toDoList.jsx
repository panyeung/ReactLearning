import React, { Component } from "react";

export default class App extends Component {
  state = {
    data: [],
  };
  myText = React.createRef();
  render() {
    return (
      <div>
        <div>ToDo List</div>
        <input ref={this.myText}></input>
        <ul>
          {this.state.data.map((item, index) => (
            <li key={item + index}>
              {/*Rich text display*/}
              <span dangerouslySetInnerHTML={{ __html: item }}></span>
              <button onClick={() => this.onDelete2(index)}>Delete1</button>
              <button onClick={this.onDelete2.bind(this, index)}>
                Delete2
              </button>
            </li>
          ))}
        </ul>
        {this.state.data.length === 0 ? <div>No More Item</div> : null}
        {
          //This is the short circuit. Only when first part of and condition is true then the div execute
        }
        {this.state.data.length === 0 && <div>No More Item</div>}
        <button
          onClick={() => {
            console.log(this.myText.current.value);
            this.setState({
              data: [...this.state.data, this.myText.current.value],
            });

            //clear input box
            this.myText.current.value = "";
          }}
        >
          Add
        </button>
      </div>
    );
  }

  onDelete2 = (index) => {
    console.log("On Delete2, " + index);
    let newlist = this.state.data.slice();
    newlist.splice(index, 1);
    this.setState({
      data: newlist,
    });
  };
}

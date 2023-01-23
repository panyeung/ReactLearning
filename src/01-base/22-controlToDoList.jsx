import React, { Component } from "react";

export default class App extends Component {
  state = {
    data: [],
    myText: "",
  };
  //   myText = React.createRef();
  render() {
    return (
      <div>
        <div>ToDo List</div>
        <input
          value={this.state.myText}
          onChange={(evt) => {
            this.setState({
              myText: evt.target.value,
            });
          }}
        ></input>
        <ul>
          {this.state.data.map((item, index) => (
            <li key={item.myText + index}>
              {/*Rich text display*/}
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={() => this.handleCheck(index)}
              />
              <span
                dangerouslySetInnerHTML={{ __html: item.myText }}
                style={{ textDecoration: item.isChecked ? "line-through" : "" }}
              ></span>
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
            // console.log(this.myText.current.value);
            this.setState({
              data: [
                ...this.state.data,
                { isChecked: false, myText: this.state.myText },
              ],
              myText: "",
            });
          }}
        >
          Add
        </button>
      </div>
    );
  }

  handleCheck = (index) => {
    console.log(index);
    let newList = this.state.data;
    newList[index].isChecked = !this.state.data[index].isChecked;
    this.setState({
      data: newList,
    });
  };
  onDelete2 = (index) => {
    console.log("On Delete2, " + index);
    let newlist = this.state.data.slice();
    newlist.splice(index, 1);
    this.setState({
      data: newlist,
    });
  };
}

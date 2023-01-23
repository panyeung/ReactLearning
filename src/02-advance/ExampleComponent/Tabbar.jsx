import React, { Component } from "react";

export default class Tabbar extends Component {
  state = {
    list: [
      {
        id: 0,
        text: "Movie",
      },
      {
        id: 1,
        text: "Drama",
      },
      {
        id: 2,
        text: "My",
      },
    ],
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item, index) => (
            <li
              key={item.id}
              className={this.props.current === index ? "active" : ""}
              onClick={() => this.handleClick(index)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  handleClick(index) {
    //tell the parent component to change the state.
    this.props.event(index);
  }
}

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
    current: -1,
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item, index) => (
            <li
              key={item.id}
              className={this.state.current === index ? "active" : ""}
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
    console.log(index);
    this.setState({
      current: index,
    });
    //tell the parent component to change the state.
    this.props.event(index);
  }
}

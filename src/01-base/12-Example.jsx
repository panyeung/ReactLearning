import React, { Component } from "react";
import "./css/02-example.css";
import Film from "../ExampleComponent/Film";
import Cinema from "../ExampleComponent/Cinema";
import Center from "../ExampleComponent/Center";
export default class App extends Component {
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
    click: -1,
  };
  click = (index) => {
    this.setState({ click: index });
  };

  which() {
    switch (this.state.click) {
      case 0:
        return <Film></Film>;
      case 1:
        return <Cinema></Cinema>;
      case 2:
        return <Center></Center>;

      default:
        return null;
    }
  }
  render() {
    return (
      <div>
        {/* {this.state.click === 0 && <Film></Film>}
        {this.state.click === 1 && <Cinema></Cinema>}
        {this.state.click === 2 && <Center></Center>} */}

        {this.which()}
        <ul>
          {this.state.list.map((item, index) => (
            <li
              className={item.id === this.state.click ? "active" : ""}
              key={item.id}
              onClick={() => this.click(index)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

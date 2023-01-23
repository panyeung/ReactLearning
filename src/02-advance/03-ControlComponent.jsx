import React, { Component } from "react";
import "./css/02-example.css";
import Film from "./ExampleComponent2/Film";
import Cinema from "./ExampleComponent2/Cinema";
import Center from "./ExampleComponent2/Center";
import Tabbar from "./ExampleComponent2/Tabbar";
export default class App extends Component {
  state = {
    click: 0,
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

        <Tabbar
          event={(index) => {
            this.setState({
              click: index,
            });
          }}
          click={this.state.click}
        ></Tabbar>
      </div>
    );
  }
}

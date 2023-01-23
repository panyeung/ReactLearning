import React, { Component } from "react";
import "./css/02-example.css";
import Film from "./ExampleComponent/Film";
import Cinema from "./ExampleComponent/Cinema";
import Center from "./ExampleComponent/Center";
import Tabbar from "./ExampleComponent/Tabbar";
export default class App extends Component {
  state = {
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

        <Tabbar
          event={(index) => {
            this.setState({
              click: index,
            });
          }}
        ></Tabbar>
      </div>
    );
  }
}

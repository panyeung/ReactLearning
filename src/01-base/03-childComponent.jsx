import React, { Component } from "react";

const Navbar = () => <div>NavBar</div>;
const Body = () => <div>body</div>;
const Copyright = () => <div>CopyRight</div>;

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <div>This will not display</div>
          {/* It is hidden inside the props.children */}
        </Navbar>
        <Body></Body>
        <Copyright></Copyright>
      </div>
    );
  }
}

export default App;

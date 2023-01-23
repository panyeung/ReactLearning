import React, { Component } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar/Sidebar";
export default class App extends Component {
  render() {
    return (
      <div>
        {/*class component
         */}
        <Navbar title="navigation"></Navbar>
        {/*functional component
         */}
        <Sidebar bg="yellow" position="left"></Sidebar>
      </div>
    );
  }
}

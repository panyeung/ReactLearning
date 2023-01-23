import React, { Component } from "react";
import Navbar from "./Navbar/index.js";

export default class app extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Header Page</h2>
          <Navbar title="Header Page" leftshow={false}></Navbar>
        </div>
        <div>
          <h2>List</h2>
          <Navbar title="List Page" leftshow={true}></Navbar>
        </div>
        <div>
          <h2>Shopping Cart</h2>
          <Navbar title="Shopping Cart" leftshow="true"></Navbar>
        </div>
      </div>
    );
  }
}

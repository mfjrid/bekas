import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>This is Header Component</h1>
        <ul>
          <li>Home</li>
          <li>List Students</li>
          <li>Add Student</li>
        </ul>
      </div>
    );
  }
}

export default Header;

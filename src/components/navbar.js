import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav>
        {this.props.difficulty === null
          ? "Math Trainer"
          : "Difficulty: " + this.props.difficulty}
      </nav>
    );
  }
}
export default NavBar;

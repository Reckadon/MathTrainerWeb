import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className={this.getClass()}>
        {this.getButton()}

        {this.props.difficulty === null
          ? "Math Trainer"
          : "Difficulty: " + this.props.difficulty}
      </nav>
    );
  }
  getClass() {
    return this.props.difficulty === null ? null : "secondNav";
  }

  getButton() {
    let button;
    if (this.props.difficulty === null) {
      button = null;
    } else {
      button = (
        <button
          style={{ backgroundColor: "#00000000" }}
          onClick={this.props.onBack}
        >
          <svg height="20" width="20" style={{ backgroundColor: "#00000000" }}>
            <line
              x1="2"
              y1="10"
              x2="20"
              y2="10"
              style={{ stroke: "white", strokeWidth: 2 }}
            />
            <line
              x1="10"
              y1="0"
              x2="1"
              y2="11"
              style={{ stroke: "white", strokeWidth: 2 }}
            />
            <line
              x1="1"
              y1="10"
              x2="10"
              y2="20"
              style={{ stroke: "white", strokeWidth: 2 }}
            />
          </svg>
        </button>
      );
    }
    return button;
  }
}
export default NavBar;

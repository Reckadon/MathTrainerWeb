import React, { Component } from "react";
import "./diffSelector.css";

class DiffSelector extends Component {
  render() {
    return (
      <div className="buttonsGrp">
        <h3 id="selectDiffLabel">Select Difficulty:</h3>
        <button
          className="diffButton"
          onClick={() => this.props.onDiffSelected("Easy")}
        >
          Easy
        </button>
        <button
          className="diffButton"
          onClick={() => this.props.onDiffSelected("Medium")}
        >
          Medium
        </button>
        <button
          className="diffButton"
          onClick={() => this.props.onDiffSelected("Hard")}
        >
          Hard
        </button>
      </div>
    );
  }
}

export default DiffSelector;

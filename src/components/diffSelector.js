import React, { Component } from "react";
import "./diffSelector.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class DiffSelector extends Component {
  render() {
    return (
      <div className="buttonsGrp">
        <Router>
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
        </Router>
      </div>
    );
  }
}

export default DiffSelector;

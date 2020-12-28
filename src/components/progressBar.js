import React, { Component } from "react";

class ProgressBar extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>{this.props.value < 0 ? "Times Up!" : this.props.value}</h2>
        <div className="bar">
          <div
            className="progress"
            style={{ width: this.getPercent() + "%" }}
          ></div>
        </div>
      </React.Fragment>
    );
  }
  getPercent() {
    return (this.props.value / 60) * 100;
  }
}

export default ProgressBar;

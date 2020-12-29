import React, { Component } from "react";
import ProgressBar from "./progressBar.js";
import Card from "./card";
import "./styles/Game.css";

class Game extends Component {
  state = {
    timeLeft: 60, //initial time
    buttonText: "START",
    isStarted: false,
  };

  render() {
    return (
      <React.Fragment>
        <h4>
          Press Start and Answer as many questions as possible before the Timer
          runs out of Time!
        </h4>
        <ProgressBar value={this.state.timeLeft} />
        <Card
          isStarted={this.state.isStarted}
          diff={this.props.diff}
          buttonText={this.state.buttonText}
        />
        <button
          disabled={this.state.isStarted}
          className="startButton"
          onClick={() => this.start()}
        >
          {this.state.buttonText}
        </button>
      </React.Fragment>
    );
  }
  start() {
    if (this.state.buttonText === "RESET") {
      this.setState({ timeLeft: 60, buttonText: "START" });
      return;
    }
    this.setState({ isStarted: true });
    const timer = setInterval(() => {
      this.setState({ timeLeft: this.state.timeLeft - 1 }, () => {
        if (this.state.timeLeft < 0) {
          clearInterval(timer);
          this.setState({ buttonText: "RESET", isStarted: false });
        }
      });
    }, 1000);
  }
}

export default Game;

import React, { Component } from "react";
import ProgressBar from "./progressBar.js";
import "./Game.css";

class Game extends Component {
  state = {
    timeLeft: 60, //initial time
  };

  render() {
    return (
      <React.Fragment>
        <h4>
          Press Start and Answer as many questions as possible before the Timer
          runs out of Time!
        </h4>
        <ProgressBar value={this.state.timeLeft} />
        <button className="startButton" onClick={() => this.start()}>
          START
        </button>
      </React.Fragment>
    );
  }
  start() {
    setInterval(() => {
      this.setState({ timeLeft: this.state.timeLeft - 1 }, () => {
        if (this.state.timeLeft === 0) {
          clearInterval();
        }
      });
    }, 1000);
  }
}

export default Game;

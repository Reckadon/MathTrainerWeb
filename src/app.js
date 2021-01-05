import React, { Component } from "react";
import DiffSelector from "./components/diffSelector.js";
import NavBar from "./components/navbar";
import Game from "./components/Game";

class App extends Component {
  state = {
    diff: null,
    highScore: 0,
    highestScore: 0,
  };
  componentDidMount() {
    const eScore =
      localStorage.getItem("Easy") === null ? 0 : localStorage.getItem("Easy");
    const mScore =
      localStorage.getItem("Medium") === null
        ? 0
        : localStorage.getItem("Medium");
    const hScore =
      localStorage.getItem("Hard") === null ? 0 : localStorage.getItem("Hard");

    const highestScore = Math.max(eScore, mScore, hScore);
    this.setState({ highestScore });
  }

  handleDiffSelection = (diff) => {
    this.setState({ diff }, () => {
      const highScore =
        localStorage.getItem(this.state.diff) === null
          ? 0
          : localStorage.getItem(this.state.diff);
      this.setState({ highScore });
    });
  };
  handleBack = () => {
    this.setState({ diff: null, highScore: 0 });
  };
  handleGameEnd = (points) => {
    if (this.state.diff === null) return;
    if (this.state.highScore < points) {
      localStorage.setItem(this.state.diff, String(points));
      this.setState({ highScore: points });
    }
  };

  render() {
    return (
      <React.Fragment>
        <NavBar difficulty={this.state.diff} onBack={this.handleBack} />
        <div className="container">{this.getContent()}</div>
      </React.Fragment>
    );
  }

  getContent() {
    if (this.state.diff === null) {
      return (
        <React.Fragment>
          <DiffSelector onDiffSelected={this.handleDiffSelection} />
          <h3 className="highScore">
            Highest Score: {this.state.highestScore}
          </h3>
        </React.Fragment>
      );
    } else {
      return (
        <Game
          diff={this.state.diff}
          onEnded={this.handleGameEnd}
          highScore={this.state.highScore}
        />
      );
    }
  }
}

export default App;

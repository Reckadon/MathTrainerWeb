import React, { Component } from "react";
import "./styles/card.css";

class Card extends Component {
  state = {
    question: "",
    answer: null,
    points: 0,
    entered: null,
    running: false,
  };

  componentDidUpdate() {
    if (this.props.isStarted && !this.state.running) {
      this.setState({ running: true });
      this.generateQuestion();
    } else if (!this.props.isStarted && this.state.running) {
      this.setState({
        running: false,
        question: "",
        answer: null,
        entered: null,
      });
      document.getElementById("input").placeholder = "";
    }
    if (
      this.props.buttonText === "START" &&
      !this.state.running &&
      this.state.points !== 0
    ) {
      this.setState({ points: 0 });
    }
  }

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.submit();
    }
  };

  render() {
    return (
      <div onClick={() => this.submit()} className="card">
        <h4>Question:</h4>
        <h2>{this.state.question}</h2>
        <h4 className="down">Enter Answer:</h4>
        <input
          onKeyPress={this.handleKeyPress}
          disabled={!this.state.running}
          id="input"
          value={this.state.running ? null : ""}
          type="number"
          onChange={(event) => {
            this.setState({ entered: event.target.value });
          }}
        ></input>
        <h6>Tap/Click anywhere on the card or use your Enter key to Submit!</h6>
        <h2 className="points">Points: {this.state.points}</h2>
      </div>
    );
  }
  generateQuestion() {
    if (!this.props.isStarted) {
      return;
    }
    const x = this.getNum();
    const y = this.getNum();
    const question = x + "+" + y;
    this.setState({ question });
    const answer = x + y;
    this.setState({ answer });
  }

  submit() {
    if (
      this.state.running &&
      Number(this.state.entered) === this.state.answer
    ) {
      this.generateQuestion();
      this.setState({ points: this.state.points + 10 });
      document.getElementById("input").placeholder = "";
    } else if (
      this.state.running &&
      (this.state.entered === "" || this.state.entered === null)
    ) {
      document.getElementById("input").placeholder = "Enter a Number!";
    } else if (
      this.state.running &&
      (this.state.entered !== "" || this.state.entered !== null)
    ) {
      document.getElementById("input").placeholder = "Wrong!";
    }
    document.getElementById("input").value = "";
    this.setState({ entered: "" });
  }

  getNum() {
    return Math.floor(Math.random() * 100) + 1;
  }
}

export default Card;

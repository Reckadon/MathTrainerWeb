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

    const diff = this.props.diff;

    let op; //operator
    if (diff === "Easy") op = Math.random() * 10 > 5 ? " + " : " - ";
    else {
      if (Math.random() * 10 < 3) op = " x ";
      else op = Math.random() * 10 > 5 ? " + " : " - ";
    }

    let multiplier; //numbers
    if (op === " + " || op === " - ") {
      switch (diff) {
        case "Easy":
          multiplier = 100;
          break;
        case "Medium":
        case "Hard":
          multiplier = 1000;
          break;
        default:
          break;
      }
    } else {
      multiplier = 100;
    }
    const x = this.getNum(multiplier);
    const y = this.getNum(multiplier);

    let question; //question
    switch (op) {
      case " + ":
        question = x + " + " + y;
        break;
      case " - ":
        if (x > y) question = x + " - " + y;
        else question = y + " - " + x;
        break;
      case " x ":
        question = x + " x " + y;
        break;
      default:
        break;
    }
    this.setState({ question });
    let answer; //answer
    switch (op) {
      case " + ":
        answer = x + y;
        break;
      case " - ":
        if (x > y) answer = x - y;
        else answer = y - x;
        break;
      case " x ":
        answer = x * y;
        break;
    }
    this.setState({ answer });
  }

  submit() {
    if (
      this.state.running &&
      Number(this.state.entered) === this.state.answer //correct answer
    ) {
      let points;
      switch (
        this.props.diff //points determination
      ) {
        case "Easy":
          points = 10;
          break;
        case "Medium":
          points = 20;
          break;
        case "Hard":
          points = 30;
          break;
        default:
          break;
      }
      this.generateQuestion();
      this.setState({ points: this.state.points + points });
      document.getElementById("input").placeholder = "";
    } else if (
      this.state.running &&
      (this.state.entered === "" || this.state.entered === null) //no answer
    ) {
      document.getElementById("input").placeholder = "Enter a Number!";
    } else if (
      this.state.running &&
      (this.state.entered !== "" || this.state.entered !== null) //wrong answer
    ) {
      document.getElementById("input").placeholder = "Wrong!";
    }
    document.getElementById("input").value = "";
    this.setState({ entered: "" });
  }

  getNum(multiplier) {
    let num;
    if (multiplier === 100 && this.props.diff === "Medium") {
      //for multiplication
      do {
        num = Math.floor(Math.random() * multiplier) + 1;
      } while (num > 15);
      return num;
    } else if (multiplier === 100 && this.props.diff === "Hard") {
      do {
        num = Math.floor(Math.random() * multiplier) + 1;
      } while (num > 50);
      return num;
    }

    if (this.props.diff === "Medium") {
      //for addition or subtraction
      do {
        num = Math.floor(Math.random() * multiplier) + 1;
      } while (num > 500);
      return num;
    }
    return Math.floor(Math.random() * multiplier) + 1;
  }
}

export default Card;

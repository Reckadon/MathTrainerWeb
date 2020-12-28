import React, { Component } from "react";
import "./styles/card.css";

class Card extends Component {
  state = {
    question: "",
    answer: null,
    running: false,
  };

  componentDidUpdate() {
    if (this.props.isStarted && !this.state.running) {
      this.setState({ running: true });
      this.generateQuestion();
    } else if (!this.props.isStarted && this.state.running) {
      this.setState({ running: false, question: "", answer: null });
    }
  }

  render() {
    return (
      <div className="card">
        <h4>Question:</h4>
        <h2>{this.state.question}</h2>
        <h4>Enter Answer:</h4>
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

  getNum() {
    return Math.floor(Math.random() * 100) + 1;
  }
}

export default Card;

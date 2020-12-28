import React, { Component } from "react";
import "./styles/card.css";

class Card extends Component {
  state = { question: "" };
  render() {
    return (
      <div className="card">
        <h4>Question:</h4>
        <h2>{this.state.question}</h2>
        <h4>Enter Answer:</h4>
      </div>
    );
  }
}

export default Card;

import React, { Component } from "react";
import DiffSelector from "./components/diffSelector.js";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    diff: null,
  };

  handleDiffSelection = (diff) => {
    this.setState({ diff });
  };
  handleBack = () => {
    this.setState({ diff: null });
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
    let content;
    if (this.state.diff === null) {
      content = <DiffSelector onDiffSelected={this.handleDiffSelection} />;
    } else {
      content = <h1>Selected</h1>;
    }
    return content;
  }
}

export default App;

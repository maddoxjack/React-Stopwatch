import React, { Component } from "react";
import Button from "./button.js";
import Wrapper from "./wrapper.js";
import "./App.css";

class App extends Component {
  state = {
    timer: 0
  };

  countdownInterval = 0;

  addTime = () => {
    let newTime = this.state.timer + 1;
    this.setState({
      timer: newTime
    });
  };

  startTimer = () => {
    this.countdownInterval = setInterval(this.addTime, 1000);
  };

  stopTimer = () => {
    clearInterval(this.countdownInterval);
  };

  resetTimer = () => {
    clearInterval(this.countdownInterval);
    this.setState({
      timer: 0
    });
  };

  render() {
    const { timer } = this.state;
    return (
      <div className="App">
        <p>Timer: {timer}</p>
        <Wrapper>
          <Button clickHandler={this.startTimer} name={"Start Timer"} />
          <Button clickHandler={this.stopTimer} name={"Stop Timer"} />
          <Button clickHandler={this.resetTimer} name={"Reset Timer"} />
        </Wrapper>
      </div>
    );
  }
}

export default App;

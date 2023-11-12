import { Component } from "react";
import "./Stopwatch.css";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isRunning: false,
    };
  }

  handleStart = () => {
    if (!this.state.isRunning) {
      this.interval = setInterval(() => {
        this.setState(prevState => ({
          counter: prevState.counter + 1,
          isRunning: true,
        }));
      }, 1000);
    }
  };

  handlePause = () => {
    clearInterval(this.interval);
    this.setState({ isRunning: false });
  };

  handleReset = () => {
    clearInterval(this.interval);
    this.setState({ counter: 0, isRunning: false });
  };

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.counter}</h1>
        <div className="controls">
          <button onClick={this.handleReset}>Reset</button>
          <button onClick={this.handleStart}>Start</button>
          <button onClick={this.handlePause}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;

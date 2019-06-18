import React from "react";
import Display from "./Display";

export default class Dashboard extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  };

  render() {
    return (
      <div>
        <form>
          <h1>Baseball Counter</h1>
          <Display count={this.state}/>
          <button onClick={this.ball}>Ball</button>
          <button onClick={this.strike}>Strike</button>
          <button onClick={this.foul}>Foul</button>
          <button onClick={this.hit}>Hit</button>
        </form>
      </div>
    );
  }

  ball = event => {
    event.preventDefault();
    if (this.state.balls >= 3) {
      this.setState({
        balls: 0,
        strikes: 0
      });
    } else {
      this.setState({
        balls: this.state.balls + 1
      });
    }
  };

  strike = event => {
    event.preventDefault();
    if (this.state.strikes >= 2) {
      this.setState({
        balls: 0,
        strikes: 0
      });
    } else {
      this.setState({
        strikes: this.state.strikes + 1
      });
    }
  };

  foul = event => {
    event.preventDefault();
    if (this.state.strikes >= 2) {
      this.setState({
        strikes: this.state.strikes
      });
    } else {
      this.setState({
        strikes: this.state.strikes + 1
      });
    }
  };
  hit = event => {
      event.preventDefault()
      this.setState({
          balls: 0,
          strikes: 0
      })
  }
}

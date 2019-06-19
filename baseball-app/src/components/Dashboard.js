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
          <h1 className='counter-header'>Baseball Counter</h1>
          <Display balls={this.state.balls} strikes={this.state.strikes}/>
          <div className='button-container'>
            <button className="ball-btn" onClick={this.ball}>
              Ball
            </button>
            <button className="strike-btn" onClick={this.strike}>
              Strike
            </button>
            <button className="foul-btn" onClick={this.foul}>
              Foul
            </button>
            <button className="hit-btn" onClick={this.hit}>
              Hit
            </button>
          </div>
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
    event.preventDefault();
    this.setState({
      balls: 0,
      strikes: 0
    });
  };
}

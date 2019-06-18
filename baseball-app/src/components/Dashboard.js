import React from "react";

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
          {this.state.balls}
          {this.state.strikes}
          <button onClick={this.ball}>Ball</button>
          <button onClick={this.strike}>Strike</button>
          <button>Foul</button>
          <button>Hit</button>
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
        strikes: 0,
        balls: 0
      });
    } else {
      this.setState({
        strikes: this.state.strikes + 1
      });
    }
  };
}

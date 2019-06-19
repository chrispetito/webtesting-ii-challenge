import React from "react";

export default function Display(props) {
  return (
    <div className="count-box">
      <div>
        <h1 className="count-number">Balls: {props.balls}</h1>
      </div>

      <div>
        <h1 className="count-number">Strikes: {props.strikes}</h1>
      </div>
    </div>
  );
}

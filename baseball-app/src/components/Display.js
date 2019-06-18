import React from "react";

export default function Display(props) {
  return (
    <div>
      <h1>{props.count.balls}</h1>
      <h1>{props.count.strikes}</h1>
    </div>
  );
}

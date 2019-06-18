import React from "react";

export default function Display(props) {
  return (
    <div className="count-box">
      <div>
         
        <h1 className='count-number'>Balls: {props.count.balls}</h1>
      </div>

      <div>
         
        <h1 className='count-number'>Strikes: {props.count.strikes}</h1>
      </div>
    </div>
  );
}

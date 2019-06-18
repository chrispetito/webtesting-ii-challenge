import React from "react";

export default function Display(props) {
  return (
    <div className="count-box">
      <div>
          {/* <h2 className='ball-header'>Balls</h2> */}
        <h1 className='count-number'>{props.count.balls}</h1>
      </div>

      <div>
          {/* <h2 className='strike-header'>Strikes</h2> */}
        <h1 className='count-number'>{props.count.strikes}</h1>
      </div>
    </div>
  );
}

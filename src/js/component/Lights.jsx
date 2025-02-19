import React from "react";

export default function Lights({ time, color, index, handleClick }) {
  return (
    <section>
      {/* Circles */}
      <div
        className="dot firstCircle"
        style={{
          backgroundColor: time === 0 ? color[0] : "",
        }}
        onClick={() => handleClick(0)}
      ></div>
      <div
        className="dot secondCircle"
        style={{
          backgroundColor: time === 1 ? color[1] : "",
        }}
        onClick={() => handleClick(1)}
      ></div>
      <div
        className="dot thirdCircle"
        style={{
          backgroundColor: time === 2 ? color[2] : "",
        }}
        onClick={() => handleClick(2)}
      ></div>
    </section>
  );
};
import React from "react";
import Lights from "./Lights";
import Rectangles from "./Rectangles";
import TrafficLogic from "./TrafficLogic";

export default function Home() {
  return (
    <TrafficLogic>
      {({ time, color, handleClick }) => (
          <div>
            <Lights time={time} color={color} index={0} handleClick={handleClick} />
            <Rectangles color="" />
          </div>
      )}
    </TrafficLogic>
  );
}



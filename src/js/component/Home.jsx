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
            {/*You can change the color of the whole traffic light except for the dots*/}
            <Rectangles color="" />
          </div>
      )}
    </TrafficLogic>
  );
}



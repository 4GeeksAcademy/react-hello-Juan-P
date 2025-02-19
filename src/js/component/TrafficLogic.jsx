import React, { useState, useEffect } from "react";

export default function TrafficLogic({ children }) {
  const [time, setTime] = useState(0);
  const color = ["#f8200b", "#f5f32a", "#07fa08"]; // Ligth Colors

  // Auto Light Change
  function changeLight() {
    setTime((prevTime) => (prevTime + 1) % color.length);
  }

  useEffect(() => {
    const delay = color[time] === "#f5f32a" ? 3000 : 10000; // 3 secs yellow, 10 secs for other colors
    const interval = setTimeout(() => {
      changeLight();
    }, delay);

    return () => clearTimeout(interval); // Clean interval
  }, [time]);

  // Manual Light Change
  function handleClick(index) {
    setTime(index);
  }

  return children({ time, color, handleClick });
}

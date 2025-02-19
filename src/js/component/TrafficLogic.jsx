import React, { useState, useEffect } from "react";

export default function TrafficLogic({ children }) {
  const [time, setTime] = useState(0);
  const color = ["#f8200b", "#f5f32a", "#07fa08"]; // Colores de las luces

  // Cambio automático de la luz
  function changeLight() {
    setTime((prevTime) => (prevTime + 1) % color.length);
  }

  useEffect(() => {
    const delay = color[time] === "#f5f32a" ? 3000 : 10000; // 3 segundos para amarillo, 10 para los demás
    const interval = setTimeout(() => {
      changeLight();
    }, delay);

    return () => clearTimeout(interval); // Limpiar el intervalo al desmontar
  }, [time]);

  // Cambio manual de la luz
  function handleClick(index) {
    setTime(index);
  }

  return children({ time, color, handleClick });
}

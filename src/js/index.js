import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";  // Asegúrate de que los estilos están bien importados
import Home from "./component/Home.jsx";  // Importa Home

// Renderiza Home (o cambia a TrafficLight si quieres verlo en su lugar)
ReactDOM.createRoot(document.getElementById('app')).render(<Home />);



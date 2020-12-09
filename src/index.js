import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import GameProvider from "./context";

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

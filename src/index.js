import React from "react";
import ReactDOM from "react-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import App from "./App";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const options = {
  position: positions.TOP_CENTER,
  containerStyle: {
    zIndex: 100,
  },
};

const Root = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

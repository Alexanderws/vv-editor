import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./normalize.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { AppContextProvider } from "./contexts/app.context";
import { ServicesContextProvider } from "./contexts/services.context";

ReactDOM.render(
  <AppContextProvider>
    <ServicesContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ServicesContextProvider>
  </AppContextProvider>,
  document.getElementById("root")
);

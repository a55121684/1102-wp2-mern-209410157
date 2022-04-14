import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App_57 from "./App_57";
import "normalize.css";
import reportWebVitals from "./reportWebVitals";
import { AppProvider_57 } from "./context/appContext_57";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider_57>
      <App_57 />
    </AppProvider_57>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

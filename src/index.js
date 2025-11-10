import React from "react";
import ReactDOM from "react-dom/client";
import "./Css/components/button.css";
import "./index.css";
import "./Css/components/alerts.css";
import "./Css/components/loading.css";
import "./Css/components/google.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

//use thes to rous paths page wibsite
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

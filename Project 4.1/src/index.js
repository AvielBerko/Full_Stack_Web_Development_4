import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App1 from "./project1/App1";
import App2 from "./project2/App2Container";
import App1 from "./project1/App1Container";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);

reportWebVitals();

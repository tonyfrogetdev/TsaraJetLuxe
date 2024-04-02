import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<div>Chargement...</div>} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

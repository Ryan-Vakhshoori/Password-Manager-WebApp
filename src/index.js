import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Passwords from "./routes/passwords";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="passwords" element={<Passwords />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

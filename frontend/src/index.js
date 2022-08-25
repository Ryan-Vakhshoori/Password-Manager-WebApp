import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.js";
import Passwords from "./pages/passwords.js";
import { createRoot } from "react-dom/client";
import NewUser from "./pages/new-user.js";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="new-user" element={<NewUser />} />
      <Route path="passwords" element={<Passwords />} />
    </Routes>
  </BrowserRouter>
);

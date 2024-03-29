import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.js";
import Passwords from "./pages/passwords.js";
import { createRoot } from "react-dom/client";
import NewUser from "./pages/new-user.js";
import Login from "./pages/login.js";
import NewPassword from "./pages/new-password.js";
import DeletePassword from "./pages/delete-password.js";
import EditPassword from "./pages/edit-password.js";
import ForgotPassword from "./pages/forgot-password.js";
import ResetPassword from "./pages/reset-password.js";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="new-user" element={<NewUser />} />
      <Route path="login" element={<Login />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password/:docID/:username" element={<ResetPassword />} />
      <Route path="passwords/:docID" element={<Passwords />} />
      <Route path="passwords/:docID/new-password" element={<NewPassword />} />
      <Route path="passwords/:docID/delete-password" element={<DeletePassword />} />
      <Route path="passwords/:docID/edit-password" element={<EditPassword />} />
    </Routes>
  </BrowserRouter>
);

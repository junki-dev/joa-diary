import React from "react";
import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Main />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

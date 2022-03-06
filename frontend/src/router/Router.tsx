import React from "react";
import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router-dom";
import Main from "../pages/Main";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

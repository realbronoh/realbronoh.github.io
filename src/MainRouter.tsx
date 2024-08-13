import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:lang" element={<App />} />
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;

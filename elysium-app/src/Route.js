import React from "react";
import { Routes } from "react-router-dom";
import J from "./pages/J";

const Route = () => {
  return (
      <Routes>
    <div>
        <Route path="home" element={J} />
    </div>
      </Routes>
  );
};

export default Route;

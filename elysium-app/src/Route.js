import React from "react";
import { Routes, Route } from "react-router-dom";
// import J from "./pages/J";
// import Abpute from "./pages/Abpute";
import J from "./pages/J";
import Homepage from "./pages/Home";
import Abpute from "./pages/About";

const Rout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Abpute/>} />
      </Routes>
    </div>
  );
};

export default Rout;

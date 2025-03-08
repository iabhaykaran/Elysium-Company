import React from "react";
import { Routes, Route } from "react-router-dom";

// import Homepage from "./pages/Home";

import ElysiumPage from "./pages/About";

const Rout = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/home" element={<Homepage />} />/ */}
        <Route path="/" element={<ElysiumPage />} />
      </Routes>
    </div>
  );
};

export default Rout;

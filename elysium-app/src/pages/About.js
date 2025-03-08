import React from "react";
import { Link } from "react-router-dom";
const Abpute = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "10px",
        height: "100vh",
      }}
    >
      <h1>About</h1>

      <Link to="/">Home</Link>
    </div>
  );
};

export default Abpute;

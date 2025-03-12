import React from "react";

import "../pages/New.css";

const Card = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <div className="services-card">
        <h3> {props.title}</h3>
        {/* <hr/> */}
        <br />
        <p>
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Card;

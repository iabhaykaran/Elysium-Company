import React from "react";

import "../pages/New.css";

const Card = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <div className="services-card">
        <h3> {props.title}</h3>
        <br />
        <p>
          {props.text}A well-designed website is a powerful marketing and
          communication tool that helps build trust and generate leads.
        </p>
      </div>
    </div>
  );
};

export default Card;

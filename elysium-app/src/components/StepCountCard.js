import React from "react";

const StepCountCard = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ background: "none" }} className="services-card  count-card">
        <h1 style={{ fontSize: "50px" }}>{props.count}</h1>
        <br />
        <h4>{props.heading}</h4>
        <br />

        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default StepCountCard;

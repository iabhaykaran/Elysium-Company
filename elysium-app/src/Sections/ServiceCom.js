import React from "react";

import "../pages/New.css";
import Card from "../components/Card";

const ServiceCom = () => {
  return (
    <div className="service-box">
      <h2>
        Achive your business goals <br /> with
        <span className="text-half-color"> Web Development solutions</span>
      </h2>
      <br />

      <div>
        <p>
          Our battle-tested developers specialize in a wide range of web
          development services. Here's what we deliver
        </p>
      </div>
      <br />
      <br />
      <div
        className="scroll-none"
        style={{ display: "flex", gap: "20px", overflowX: "scroll" }}
      >
        <Card title="Website" />
        <Card title="Ecommerce" />
        <Card title="Web Applications" />
        <Card title="Content Management System" />
        <Card title="Low-Code Development" />
      </div>
    </div>
  );
};

export default ServiceCom;

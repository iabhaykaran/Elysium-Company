import React from "react";

import "../pages/New.css";

const ServiceCom = () => {
  return (
    <div className="service-box">
      <h1>
        Achive your business goals with{" "}
        <span className="text-half-color">Web Development solutions</span>
      </h1>
      <br />

      <div>
        <p>
          Our battle-tested developers specialize in a wide range of web
          development services. Here's what we deliver
        </p>
      </div>
      <br />
      <br />
      <div>
        <div className="services-card">
          <h3> Websites</h3>
          <br />
          <p>
            A well-designed website is a powerful marketing and communication
            tool that helps build trust and generate leads.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCom;

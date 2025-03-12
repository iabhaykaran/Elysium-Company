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
      <br />

      <div>
        <p>
          Our battle-tested developers specialize in a wide range of web
          development services. Here's what we deliver
        </p>
      </div>
      <br />
      <br />
      <br />
      <div
        className="scroll-none"
        style={{
          display: "flex",
          paddingLeft: "px",
          gap: "20px",
          overflowX: "scroll",
        }}
      >
        <Card
          title="Website"
          text="A well-designed website is a powerful marketing and communication tool that helps build trust and generate leads.  "
        />
        <Card
          title="Ecommerce"
          text=" With eCommerce solutions, businesses can operate 24 hours a day, 7 days a week, and reach customers in any time zone. "
        />
        <Card
          title="Web Applications"
          text=" Web applications can reach a global audience. They're interactive and engaging, so can easily hold users' attention.  "
        />
        <Card
          title="Content Management System"
          text="A dedicated CMS designed to the specific needs of your business will save time and money by optimizing internal workflows."
        />
        <Card
          title="Low-Code Development"
          text="Low-code and no-code solutions offer an easy, modular, and scalable way of building applications."
        />
      </div>
    </div>
  );
};

export default ServiceCom;

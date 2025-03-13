import React from "react";

const AiSection = () => {
  return (
    <div className="b-grey" style={{ padding: "60px 20px", marginTop: "60px" }}>
      <img
        style={{ borderRadius: "10px" }}
        src="ai.webp"
        width="100%"
        alt="#"
      />
      <br />
      <br />
      <h2 style={{ fontWeight: "500" }}>
        AI-Driven Optimization: Elevate Your
        <span className="text-half-color"> Website's Performance</span>
      </h2>
      <br />
      <p style={{ fontSize: "14px", textAlign: "justify" }}>
        At Elysium, we use Artificial Intelligence to create fast, intelligent,
        and scalable websites. A website should be more than just an online
        presence. It should be an experience that feels seamless and engaging.
        AI helps us achieve that by optimizing performance and enhancing user
        interaction.
        <br />
        <br />
        <h4>Why AI-Powered Websites?</h4>
        <br />
        Websites today need to be smart and efficient. AI automates tasks,
        analyzes user behavior, and improves site performance to deliver the
        best experience.
        <br />
      </p>
    </div>
  );
};

export default AiSection;

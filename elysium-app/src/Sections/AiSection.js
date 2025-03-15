import React from "react";

const AiSection = () => {
  return (
    <div
      className="b-grey"
      style={{
        padding: "100px 20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <img
        style={{ borderRadius: "1px" }}
        src="ai.webp"
        height="300px"
        width="100%"
        alt="#"
      /> */}

      <h2 style={{ fontWeight: "500" }}>
        AI-Driven Optimization: Elevate Your
        <span className="text-half-color"> Website's Performance</span>
      </h2>
      <br />

      <p style={{ fontSize: "14px" }}>
        We use Artificial Intelligence to create fast, intelligent, and scalable
        websites. A website should be more than just an online presence. It
        should be an experience that feels seamless and engaging. AI helps us
        achieve that by optimizing performance and enhancing user interaction.
      </p>
    </div>
  );
};

export default AiSection;

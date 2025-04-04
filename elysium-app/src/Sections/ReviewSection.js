import React from "react";
import { GiLetterBomb } from "react-icons/gi";

const ReviewSection = () => {
  return (
    <div style={{ height: "50vh" }} className="bg-grey  service-box">
      <h2 style={{ fontWeight: "500" }}>
        What customers
        <span className="text-half-color"> Say About Us?</span>
      </h2>
      <br />
      <br />
      <h3 style={{ fontSize: "17px", fontWeight: "500" }}>
        Excellence and speed. It's rare to get both, and ELYSIUM delivers.
      </h3>
      <br />

      <div style={{ display: "flex" }} className="review-box">
        <div style={{ marginRight: "8px" }}>
          <GiLetterBomb
            style={{
              fontSize: "42px",
              color: "rgb(255, 187, 0)",
            }}
          />
        </div>
        <div>
          <h4>Ravi Evani</h4>

          <p> Cloud Associates at Publicis Sapient </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;

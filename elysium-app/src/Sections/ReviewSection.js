import React from "react";
import { MdOutlineReviews } from "react-icons/md";
import { GiLetterBomb } from "react-icons/gi";
import { AiFillHtml5 } from "react-icons/ai";

const ReviewSection = () => {
  return (
    <div style={{ height: "50vh" }} className="bg-grey  service-box">
      <h2>
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
              color: "rgb(255, 115, 45)",
            }}
          />
          {/* <MdOutlineReviews style={{ fontSize: "40px" }} /> */}
          {/* <img src="logo192.png" alt="#" height="40px" width="100%" /> */}
        </div>
        <div>
          <h4> Ayu Devraj</h4>

          <p> Cloud Associates at Publicis Sapient </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;

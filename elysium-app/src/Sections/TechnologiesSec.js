import React from "react";
import { FaAws } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";
import { CiCloudOn } from "react-icons/ci";

const TechnologiesSec = () => {
  return (
    <div className="bg-grey" style={{ padding: "60px 20px" }}>
      <h2>
        Technologies
        <span className="text-half-color"> We leverage</span>
      </h2>
      <div
        className="scroll-none"
        style={{
          display: "flex",
          overflowX: "scroll",
          gap: "30px",
          padding: "30px 0px",
        }}
      >
        <div>
          <FaReact style={{ fontSize: "50px", flexDirection: "column" }} />
        </div>

        <div>
          <FaAws style={{ fontSize: "50px" }} />
        </div>
        <div style={{ textAlign: "center" }}>
          <VscAzure style={{ fontSize: "50px" }} />
          <p style={{ fontSize: "14px" }}>Azure Services</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <CiCloudOn style={{ fontSize: "50px" }} />
          <p style={{ fontSize: "14px" }}>Cloud</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <AiFillHtml5 style={{ fontSize: "50px" }} />

          <p style={{ fontSize: "14px" }}>HTML</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <RiTailwindCssFill style={{ fontSize: "50px" }} />

          <p style={{ fontSize: "14px" }}>Tailwind</p>
          {/* <img src="image.png" alt="#" height="50px" /> */}
        </div>
        <div style={{ textAlign: "center" }}>
          <img src="image.png" alt="#" height="50px" />
          <p style={{ fontSize: "14px" }}>Node.Js</p>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSec;

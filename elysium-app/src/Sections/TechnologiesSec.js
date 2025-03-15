import React from "react";
import { FaAws } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";
import { CiCloudOn } from "react-icons/ci";
import { FaJsSquare } from "react-icons/fa";
import { SiPhp } from "react-icons/si";

const TechnologiesSec = () => {
  return (
    <div className="bg-grey" style={{ padding: "60px 20px" }}>
      <h2 style={{ fontWeight: "500" }}>
        Technologies
        <span className="text-half-color"> we leverage</span>
      </h2>
      <div
        className="scroll-none"
        style={{
          display: "flex",
          overflowX: "scroll",
          gap: "40px",
          padding: "30px 10px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <FaReact
            style={{
              fontSize: "50px",
              flexDirection: "column",
              textAlign: "center",
            }}
          />
          <p style={{ fontSize: "14px" }}>React</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <FaAws style={{ fontSize: "50px" }} />
          <p style={{ fontSize: "14px" }}>AWS</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <VscAzure style={{ fontSize: "50px" }} />
          <p style={{ fontSize: "14px" }}>Azure</p>
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
        </div>
        <div style={{ textAlign: "center" }}>
          <SiPhp style={{ fontSize: "50px" }} />

          <p style={{ fontSize: "14px" }}>php</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <FaJsSquare style={{ fontSize: "50px" }} />

          <p style={{ fontSize: "14px" }}>Javascript</p>
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

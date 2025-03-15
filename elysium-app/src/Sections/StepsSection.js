import StepCountCard from "../components/StepCountCard";

const StepsSection = () => {
  return (
    <div className="service-box">
      {/* <br /> */}
      <h2>
        Leverage our proven
        <span className="text-half-color"> Web development process</span>
      </h2>
      <br />
      <br />

      <div>
        <p>
          We've delivered over 200+ projects - we know what it takes to execute
          a seamless and optimized web-based software development process.
        </p>
      </div>
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
        <StepCountCard
          count="01"
          heading=" Consult your idea   "
          text=" Set the right direction with our web development consultants.  "
        />
        <StepCountCard
          count="02"
          heading="
          Choose a technology
          "
          text=" Together, we'll decide on the tech stack and the overall approach. "
        />
        <StepCountCard
          count="03"
          heading="Design"
          text=" We'll craft a beautiful and user-friendly web solution with our expert designers. "
        />
        <StepCountCard
          count="04"
          heading="Develop"
          text="  We'll code the web app with a team of experienced engineers."
        />
        <StepCountCard
          count="05"
          heading="Reach the Market"
          text="We'll help you launch your product and keep it in good shape and maintenance."
        />
  
      </div>
    </div>
  );
};

export default StepsSection;

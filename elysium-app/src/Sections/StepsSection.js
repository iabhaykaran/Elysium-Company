import StepCountCard from "../components/StepCountCard";

const StepsSection = () => {
  return (
    <div className="service-box">
      <h2>
        Leverage our proven
        <span className="text-half-color"> Web development process</span>
      </h2>
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
        style={{ display: "flex", gap: "20px", overflowX: "scroll" }}
      >
        <StepCountCard count="01" />
        <StepCountCard count="02" />
        <StepCountCard count="03" />
        <StepCountCard count="04" />
        <hr />
      </div>
    </div>
  );
};

export default StepsSection;

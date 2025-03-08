import React from "react";
// import "./About.css";
import { FaLaptopCode, FaPaintBrush, FaVideo, FaRocket } from "react-icons/fa";

export default function ElysiumPage() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <header className="her">
        <h1>
          <span className="highlight">Elysium.INC</span>
        </h1>
        <br />
        <p>Web, Graphics & Video – All in One Place!</p>
        {/* <button className="cta-button">Get Started 🚀</button> */}
      </header>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <ServiceCard icon={<FaLaptopCode />} title="Web Development" />
          <ServiceCard icon={<FaPaintBrush />} title="Graphic Design" />
          <ServiceCard icon={<FaVideo />} title="Video Editing" />
          <ServiceCard icon={<FaRocket />} title="SEO & Branding" />
        </div>
      </section>

      {/* Contact Section */}

      <footer className="footer">
        <div className="servicegrid">
          <div className="service">
            <h2 style={{ color: "#FFA725" }}>
              Welcome to Elysium – Your Partner in Digital Excellence
            </h2>
            <br />
            <p>
              At Elysium, we create stunning websites, captivating graphics, and
              high-quality videos that bring your brand to life. Whether you
              need a sleek business website, an engaging social media campaign,
              or a compelling promotional video, we deliver cutting-edge
              solutions tailored to your needs.
            </p>
          </div>
          {/* <h2>Our Services</h2> */}
          {/* <div className="services"> */}
          <div className="service">
            <h3>🌐 Web Development</h3>
            <p>
              Responsive, fast, and user-friendly websites. Custom web
              applications tailored to your business. eCommerce platforms for
              seamless online selling.
            </p>
          </div>

          <div className="service">
            <h3>🎨 Graphic Design</h3>
            <p>
              Logo & branding design for a unique identity. Social media
              creatives that grab attention. Brochures, flyers, and marketing
              materials
            </p>
          </div>

          <div className="service">
            <h3>📹 Video Editing & Production</h3>

            <p>
              Promotional videos that showcase your brand. Social media reels
              and ads for better engagement. Motion graphics & animation for a
              dynamic touch.
            </p>
          </div>
          <div className="service">
            <h3>⚡UI/UX Design</h3>
            <p>
              Intuitive and engaging designs for websites & apps. User-centric
              experiences that enhance usability.
            </p>
          </div>

          <div className="service">
            <h3>📈SEO&Performance</h3>
            <p>
              Optimization Boost rankings with SEO-friendly websites. Optimize
              speed, performance, and responsiveness.
            </p>
          </div>
          {/* <hr /> */}
        </div>
      </footer>
      <div
        style={{
          textAlign: "center",
          padding: "30px   20px",

          backgroundColor: "black",
        }}
      >
        <h2>Get in Touch</h2>
        <p>
          📞 Phone: +91 7985272417
          <br />
          📧 Email: iamabhaykaran@gmail.com
        </p>
      </div>
    </div>
  );
}

// Service Card Component
function ServiceCard({ icon, title }) {
  return (
    <div className="service-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
    </div>
  );
}

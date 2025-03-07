import React from "react";
import { motion } from "framer-motion";
import "../App.css";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div
        style={{
          background: "black",
          padding: "5px 10px",
          // color: "black",
          marginBottom: "20px",
        }}
      >
        <h1>ELYSIUM </h1>
      </div>
      {/* Hero Section */}
      <motion.header
        className="hero-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          <h1>Web Development solutions</h1>
          <p>Empowering businesses with cutting-edge digital solutions</p>
          <motion.button className="cta-button" whileHover={{ scale: 1.1 }}>
            Get Started
          </motion.button>
        </div>
      </motion.header>

      {/* Services Section */}
      <section className="services-section">
        <h2>
          Our <span className="highlight">Services</span>
        </h2>
        <motion.div
          className="services-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[
            {
              title: "Web Development",
              desc: "Custom websites tailored to your business needs.",
            },
            {
              title: "Data Analytics",
              desc: "Data-driven insights for better decision-making.",
            },
            {
              title: "Website Upgrade",
              desc: "Migrate and modernize your existing website.",
            },
            {
              title: "Support Management",
              desc: "24/7 maintenance and technical support.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              whileHover={{ scale: 1.05 }}
            >
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <h2>
          Pricing <span className="highlight">Plans</span>
        </h2>
        <motion.div
          className="pricing-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {[
            {
              plan: "Basic Website (HTML, CSS, PHP) –",
              price: `10,000-40,000₹`,
              features: [
                "Simple and responsive",
                "Basic Booking functionality",
                "Hosting Cost Additional",
              ],
            },
            {
              plan: "Advanced Website Using (React.Js)",
              price: "35,000-80,000₹",
              features: [
                "High-perfomance, Modern UI",
                "Advanced SEO",
                "Experience like Facebook / Instagram",
              ],
            },
            {
              plan: "Mobile App Development",
              price: "40,000-1.5 Lakh",
              features: [
                "App Integrated with Website ",
                "Smoooth User Experience",
                "Priority Support",
              ],
            },
          ].map((plan, index) => (
            <motion.div
              key={index}
              className="pricing-card"
              whileHover={{ scale: 1.05 }}
            >
              <h3>{plan.plan}</h3>
              <br />

              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>
              <motion.button
                className="pricing-button"
                whileHover={{ scale: 1.1 }}
              >
                {plan.price}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <div className="contact">
          <h3> Call: 7985272417</h3>

          <p>iamabhaykaran@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

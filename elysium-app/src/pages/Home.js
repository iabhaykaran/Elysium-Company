import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaPaintBrush, FaVideo, FaRocket } from "react-icons/fa";
import "../App.css";
import ServiceCom from "../Sections/ServiceCom";
import OurClients from "../Sections/OurClients";
import StepsSection from "../Sections/StepsSection";

const Homepage = () => {
  return (
    <div className="App">
      <div className="homepage-container">
        {/* Hero Section */}
        <motion.header
          className="hero-section"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div style={{ padding: "10px" }}>
            <h1>
              <span className="text-half-color">ELY</span>
              SIUM
            </h1>
            <h2>Web Development solutions</h2>
            <p>Empowering businesses with cutting edge digital solutions</p>
            {/* <motion.button className="cta-button" whileHover={{ scale: 1.1 }}>
              <Link to="/home">Get Started</Link>
            </motion.button> */}
          </div>
        </motion.header>

        <ServiceCom />
        <OurClients />
        <StepsSection />
        {/* Services Section */}
        {/* <section className="services-section">
          <h2>
            Our <span className="highlight">Services</span>
          </h2>
          <motion.div
            className="services-grid  "
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
                title: "Website Updation",
                desc: "Migrate and modernize your existing website.",
              },
              {
                title: "Graphic Designer",
                desc: "Creating a Beautiful And professional Graphics related work for Your BUSSINESS .",
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
                <h3>
                  {service.title}

                  <FaLaptopCode />
                </h3>

                <p>{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section> */}

        {/*------------------- Pricing Section-------------------- */}

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
        </section>

        <section className="ser">
          {/* <h2>Our Services</h2> */}
          <div className="s-g">
            <ServiceCard icon={<FaLaptopCode />} title="Web Development" />
            <ServiceCard icon={<FaPaintBrush />} title="Graphic Design" />
            <ServiceCard icon={<FaVideo />} title="Video Editing" />
            <ServiceCard icon={<FaRocket />} title="SEO & Branding" />
          </div>
        </section>

        {/* <div className="servik">
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
          </div> */}
        <div className="servicegrid">
          {/* <h2>Our Services</h2> */}
          {/* <div className="services"> */}
          <div className="servik">
            <h3>🌐 Web Development</h3>
            <p>
              Responsive, fast, and user-friendly websites. Custom web
              applications tailored to your business. eCommerce platforms for
              seamless online selling.
            </p>
          </div>

          <div className="servik">
            <h3>🎨 Graphic Design</h3>
            <p>
              Logo & branding design for a unique identity. Social media
              creatives that grab attention. Brochures, flyers, and marketing
              materials
            </p>
          </div>

          <div className="servik">
            <h3>📹 Video Editing & Production</h3>

            <p>
              Promotional videos that showcase your brand. Social media reels
              and ads for better engagement. Motion graphics & animation for a
              dynamic touch.
            </p>
          </div>
          <div className="servik">
            <h3>⚡UI/UX Design</h3>
            <p>
              Intuitive and engaging designs for websites & apps. User-centric
              experiences that enhance usability.
            </p>
          </div>

          <div className="servik">
            <h3>📈SEO&Performance</h3>
            <p>
              Optimization Boost rankings with SEO-friendly websites. Optimize
              speed, performance, and responsiveness.
            </p>
          </div>
          {/* <hr /> */}
        </div>
      </div>

      <div className="contact">
        <h3> Call: 7985272417</h3>

        <p>iamabhaykaran@gmail.com</p>
      </div>
      {/* <J/> */}
    </div>
  );
};

export default Homepage;

function ServiceCard({ icon, title }) {
  return (
    <div className="s-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
    </div>
  );
}

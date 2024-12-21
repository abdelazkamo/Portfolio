import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward, FaLanguage } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { VscLocation } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years</small>
            </article>
            <article className="about__card">
              <FaLanguage className="about__icon" />
              <h5>Languages</h5>
              <small>
                French (Native), English (C1), Turkish (B2), German (A2)
              </small>
            </article>
            <article className="about__card">
              <MdPhone className="about__icon" />
              <h5>Phone</h5>
              <small>+49 15218154197</small>
            </article>
            <article className="about__card">
              <VscLocation className="about__icon" />
              <h5>Adress</h5>
              <small>Ludwigshafen, Germany</small>
            </article>
          </div>
          <p style={{ textAlign: "justify" }}>
            Professional Software Developer with 4+ years of experience,
            specializing in developing scalable web applications and working on
            machine learning projects. I have extensive expertise in both
            frontend and backend development using technologies like React,
            TypeScript, Node.js, GraphQL, and Python. Experienced in DevOps
            practices, including containerization and orchestration with Docker
            and Kubernetes, ensuring smooth deployment and scalability of
            applications. Proven track record in improving application
            performance, leading teams, and enhancing user engagement. Committed
            to delivering high-quality solutions and staying updated with
            industry trends.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;

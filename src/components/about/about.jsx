import React from "react";
import "./about.css";
import AI from "../../assets/ai.png";
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
            <img src={AI} alt="AI Image" />
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
                French (Native), English (C1), Turkish (C1), German (B1)
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
              <small>Mannheim, Germany</small>
            </article>
          </div>
          <p style={{ textAlign: "justify" }}>
            Full Stack Engineer and AI enthusiast based in Mannheim, Germany. I
            specialize in building scalable web applications and intelligent
            systems that solve real-world problems.
            <br /> <br />
            Over the past years, I’ve designed and delivered industry-grade
            solutions using technologies like React, Next.js, TypeScript,
            Node.js, GraphQL, Docker, and Kubernetes, while also working with AI
            models to enhance user experiences and automate workflows. From
            developing responsive frontends to integrating complex backend
            systems, I enjoy working across the full development stack to bring
            ideas to life.
            <br /> <br />I thrive in fast-paced environments where innovation
            meets impact. Whether collaborating with cross-functional teams,
            mentoring aspiring developers, or exploring the latest AI
            techniques, I focus on creating products that are both technically
            robust and user-friendly. <br /> <br />
            Take a look around to see some of the projects I’ve worked on, and
            feel free to reach out if you’d like to collaborate or just talk
            about tech, AI, or product design.
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

import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Experience Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Interface Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile App Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Usability Testing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual Design.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Front-End Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Back-End Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Full-Stack Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-Commerce Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Performance Optimization.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>API Development and Integration.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Management System (CMS) Development.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Copywriting.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blogging.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Social Media Content.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Video Content Creation.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Infographic Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Email Newsletter Creation.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default services;

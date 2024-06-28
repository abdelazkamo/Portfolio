import React from "react";
import "./porfolio.css";
import IMG1 from "../../assets/qdisco.jpg";
import kamobazaar from "../../assets/kamobazaar.png";
import IMG2 from "../../assets/iwe.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/luggage.png";
import IMG5 from "../../assets/lung.png";
import IMG6 from "../../assets/portfolio6.jpg";

const porfolio = () => {
  const projects = [
    {
      img: IMG4,
      title: "Luggage swap",
      github: "https://github.com/abdelazkamo/luggageswag-frontend",
      live: null,
      tech: "React, TypeScript, Material UI, Node.js",
    },
    {
      img: IMG4,
      title: "Automation Flow",
      github:
        "https://github.com/abdelazkamo/Automation-flow-diagram-using-ReactFlow",
      live: null,
      tech: "React, ReactFlow, TypeScript, Material UI, Redux",
    },
    {
      img: kamobazaar,
      title: "Kamobazaar",
      github: "https://github.com/abdelazkamo/kamobazaar",
      live: null,
      tech: "React, TypeScript",
    },
    {
      img: IMG1,
      title: "QDisco",
      github: null,
      live: null,
      tech: "Vue, JavaScript",
    },
    {
      img: IMG2,
      title: "IWE",
      github: null,
      live: "https://xn--iw-cja.com/",
      tech: "Ionic, TypeScript",
    },
    {
      img: IMG3,
      title: "Ischolar",
      github: null,
      live: null,
      tech: "Ionic, TypeScript",
    },
    {
      img: IMG5,
      title: "Lung Disease Detection",
      github: "https://github.com/abdelazkamo/Lung",
      live: null,
      tech: "Python, Tensorflow, CNN, FastAPI, React",
    },
    {
      img: IMG6,
      title: "Fill Up",
      github: "https://github.com/abdelazkamo/fill-up",
      live: null,
      tech: "Ionic, TypeScript",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {projects.map((item) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img
                  style={{ height: "20rem" }}
                  src={item.img}
                  alt={item.title}
                />
              </div>
              <h3>{item.title}</h3>
              <div className="tech">{item.tech}</div>
              <div className="portfolio__item-cta">
                <a
                  href={item.github}
                  className={!item.github ? "btn-disabled" : "btn"}
                  target="_blank"
                  disabled={!item.github}
                >
                  GitHub
                </a>
                {/* <a
                  href={item.live}
                  className={
                    !item.live ? "btn-live-disabled" : "btn btn-primary"
                  }
                  target="_blank"
                  disabled={!item.live}
                >
                  Live Demo
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default porfolio;

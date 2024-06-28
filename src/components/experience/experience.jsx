import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import JS from "../../assets/js.svg";
import TS from "../../assets/ts.svg";
import REACT from "../../assets/react.svg";
import HTML5 from "../../assets/html.svg";
import CSS3 from "../../assets/css3.svg";
import MONGODB from "../../assets/mongodb.svg";
import PY from "../../assets/py.svg";
import FLASK from "../../assets/flask.svg";
import FIGMA from "../../assets/figma.svg";
import FASTAPI from "../../assets/fastapi.svg";
import XD from "../../assets/xd.svg";
import NODEJS from "../../assets/nodejs.svg";
import VUE from "../../assets/vue.svg";
import SASS from "../../assets/sass.svg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const experience = () => {
  const experienceImg = [
    {
      id: 1,
      img: JS,
    },
    {
      id: 2,
      img: TS,
    },
    {
      id: 3,
      img: REACT,
    },
    {
      id: 4,
      img: HTML5,
    },
    {
      id: 5,
      img: CSS3,
    },
    {
      id: 6,
      img: MONGODB,
    },
    {
      id: 7,
      img: PY,
    },
    {
      id: 8,
      img: FLASK,
    },
    {
      id: 9,
      img: FIGMA,
    },
    {
      id: 10,
      img: FASTAPI,
    },
    {
      id: 11,
      img: NODEJS,
    },
    {
      id: 12,
      img: XD,
    },
    {
      id: 13,
      img: VUE,
    },
    {
      id: 14,
      img: SASS,
    },
  ];
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>Ionic</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>Vue</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>GraphQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development / Database</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>Flask</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>Spring Boot</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>MySql</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>PostgresSql</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>AI & Machine Learning</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>TensorFlow</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>CNN</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>Pandas</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>Matplotlib</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>Natural Language Processing</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Other Tools</h3>
          <h4 className="other_title">APIs</h4>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h5>RESTful</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h5>GraphQL</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>

          <h4 className="other_title">Other Tools</h4>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h5>Git</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h5>Jira</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h5>Bitbucket</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h5>Confluence</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/* <Swiper className="container experience__slider"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={5}
      pagination={{ clickable: true }}
      >
        {
          experienceImg.map((item)=>{
            return(
              <SwiperSlide>
                <img src={item.img} className='experience__img' alt=""/>
              </SwiperSlide>
            )
          })
        }
      </Swiper> */}
    </section>
  );
};

export default experience;

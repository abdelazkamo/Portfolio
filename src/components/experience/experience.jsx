import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

// Import skill icons
import JS from "../../assets/js.svg";
import TS from "../../assets/ts.svg";
import REACT from "../../assets/react.svg";
import HTML5 from "../../assets/html.svg";
import CSS3 from "../../assets/css3.svg";
import MONGODB from "../../assets/mongodb.svg";
import PY from "../../assets/py.svg";
import FLASK from "../../assets/flask.svg";
import FIGMA from "../../assets/figma.svg";
import XD from "../../assets/xd.svg";
import NODEJS from "../../assets/nodejs.svg";
import VUE from "../../assets/vue.svg";

// Skills data
const skills = {
  frontend: [
    { name: "JavaScript", level: "Experienced", icon: JS },
    { name: "TypeScript", level: "Experienced", icon: TS },
    { name: "HTML5", level: "Experienced", icon: HTML5 },
    { name: "CSS3", level: "Experienced", icon: CSS3 },
    { name: "React", level: "Experienced", icon: REACT },
    { name: "Vue3", level: "Experienced", icon: VUE },
    { name: "React Native", level: "Experienced" },
    { name: "Material UI", level: "Experienced" },
  ],
  backend: [
    { name: "Node.js", level: "Experienced", icon: NODEJS },
    { name: "GraphQL", level: "Experienced" },
    { name: "Python", level: "Experienced", icon: PY },
    { name: "C#", level: "Experienced" },
    { name: "Flask", level: "Intermediate", icon: FLASK },
    { name: "RESTful", level: "Experienced" },
    { name: "MongoDB", level: "Experienced", icon: MONGODB },
    { name: "MySQL", level: "Experienced" },
  ],
  devops: [
    { name: "Docker", level: "Experienced" },
    { name: "Kubernetes", level: "Experienced" },
    { name: "Azure", level: "Experienced" },
    { name: "CI/CD Pipelines", level: "Intermediate" },
    { name: "AWS", level: "Experienced" },
    { name: "Google Cloud", level: "Intermediate" },
  ],
  ai_ml: [
    { name: "LLMs", level: "Experienced" },
    { name: "TensorFlow", level: "Experienced" },
    { name: "PyTorch", level: "Experienced" },
    { name: "Scikit-learn", level: "Experienced" },
    { name: "Pandas", level: "Experienced" },
    { name: "Azure AI Foundry", level: "Experienced" },
  ],
  projectManagement: [
    { name: "Git", level: "Experienced" },
    { name: "GitHub", level: "Experienced" },
    { name: "Bitbucket", level: "Experienced" },
    { name: "GitLab", level: "Intermediate" },
    { name: "Jira", level: "Experienced" },
    { name: "Confluence", level: "Experienced" },
  ],
  design: [
    { name: "Figma", level: "Intermediate", icon: FIGMA },
    { name: "Adobe XD", level: "Experienced", icon: XD },
  ],
};

// Skill rendering component
const SkillSection = ({ title, skillList }) => (
  <div className="experience_category">
    <h3>{title}</h3>
    <div className="experience__content">
      {skillList.map((skill, index) => (
        <article className="experience__details" key={index}>
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>{skill.name}</h4>
            <small className="text-light">{skill.level}</small>
          </div>
        </article>
      ))}
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <SkillSection
          title="Frontend Development"
          skillList={skills.frontend}
        />
        <SkillSection
          title="Backend Development & Database"
          skillList={skills.backend}
        />
        <SkillSection
          title="DevOps Tools & Cloud Platforms"
          skillList={skills.devops}
        />
        <SkillSection title="AI & Machine Learning" skillList={skills.ai_ml} />
        <SkillSection
          title="Project Management Tools"
          skillList={skills.projectManagement}
        />
        <SkillSection title="UX/UI Design" skillList={skills.design} />
      </div>
    </section>
  );
};

export default Experience;

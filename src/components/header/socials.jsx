import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const socials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/abdelazkamo/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/abdelazkamo" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default socials;

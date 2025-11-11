import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser , AiOutlinePaperClip} from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import {  } from "react-icons/ri";
import { TbMessageCircle, TbProgress } from "react-icons/tb";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        < TbProgress/>
      </a>
      <a href='#porfolio' onClick={()=> setActiveNav('#porfolio')} className={ activeNav==='#porfolio' ? 'active' : ''}><BiBook/></a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <TbMessageCircle />
      </a>
    </nav>
  );
};

export default Nav;

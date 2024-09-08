import React from 'react';

import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";


function Contract() {
  return (
    <>
     <div className="container contact" id="cont">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://github.com/gharish-dev" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a href="https://leetcode.com/u/Harishjoy/" target="_blank" className="items">
            <SiLeetcode className="icons" />
          </a>
          
          <a href=":www.linkedin.com/in/g-harish-de" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
        
          <a href="https://www.instagram.com" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
         
          <a
            href="mailto:harish.joyy@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>

    </>
  );
}

export default Contract;


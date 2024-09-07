import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL } from "../Utils/Constants";

const style = {
  footer: `flex flex-col md:flex-row justify-between items-center bg-black p-6 md:p-20 h-auto md:h-38`, // Responsive flex layout
  footer_Left: `flex gap-4 md:gap-8 mb-4 md:mb-0`, // Gap and margin for spacing
  Logo: `text-white hover:opacity-80 transition duration-300`, // Hover effect for icons
  textContainer: `text-center md:text-left`, // Center text on mobile, left-align on larger screens
  text: `text-sm md:text-lg text-white font-bold`,
};

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_Left}>
        <a href={GITHUB_URL} className={style.Logo} target="_blank" rel="noopener noreferrer">
          <RiGithubLine size={40} />
        </a>
        <a href={LINKEDIN_URL} className={style.Logo} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} />
        </a>
      </div>
      <div className={style.textContainer}>
        <p className={style.text}>made with love @sachinarora</p>
      </div>
    </div>
  );
};

export default Footer;
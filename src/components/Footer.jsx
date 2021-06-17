import React from "react";
import Logo from "../assets/images/vinologo.png";
import Facebook from "../assets/images/facebookIcon.png";
import Instagram from "../assets/images/instagram.png";
import Youtube from "../assets/images/youtube.png";


const Footer = () => {
  return (
    <footer>
      <div className="col1"></div>
      <div className="col2"></div>
      <img src={Logo} alt="Logo" className="fooLogo" />
      <div className="fooLinks">
        <a href="#">How it works</a>
        <a href="#">About</a>
        <a href="#">Press</a>
        <a href="#">Contact</a>
      </div>
      <div className="socials">
        <img src={Facebook} alt="facebook" />
        <img src={Instagram} alt="Instagram" />
        <img src={Youtube} alt="youtube" />
      </div>
      <a href="https://bookvino.com" target="_blank" rel="noreferrer" className="copy" >Copyright &copy; bookvino.com {new Date().getFullYear()} All Rights Reserved</a>
    </footer>
  );
};
export default Footer
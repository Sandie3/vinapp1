import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/about">
          About
        </Link>
        <a href="#">Press</a>
        <Link to="/contact">
          Contact
        </Link>
      </div>
      <div className="socials">
        <a href="https://www.facebook.com/bookvino/" target="_blank"><img src={Facebook} alt="facebook" /></a> 
        <a href="https://www.instagram.com/book.vino/" target="_blank"><img src={Instagram} alt="Instagram" /></a> 
        <a href="https://www.youtube.com/channel/UCKmGBtyR3w7drge9NFIb4MA" target="_blank"><img src={Youtube} alt="youtube" /></a> 
      </div>
      <a href="https://bookvino.com" target="_blank" rel="noreferrer" className="copy" >Copyright &copy; bookvino.com {new Date().getFullYear()} All Rights Reserved</a>
    </footer>
  );
};
export default Footer
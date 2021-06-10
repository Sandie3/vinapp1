import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_w.png"
import { MenuContext } from "react-flexible-sliding-menu";


const Navbar = () => {

  const { toggleMenu } = useContext(MenuContext);

  return (
    <div className="Nav">

      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>   

      <button onClick={toggleMenu} className="primaryButton">
        <i className="fas fa-bars fa-2x"></i>
      </button>

    </div>
  );
};

export default Navbar;

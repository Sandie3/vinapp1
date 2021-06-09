import React, { useContext } from "react";
import Logo from "../assets/logo_w.png"
import { MenuContext } from "react-flexible-sliding-menu";


const Navbar = () => {

  const { toggleMenu } = useContext(MenuContext);

  return (
    <div className="Nav">

      <img src={Logo} alt="Logo" />

      <button onClick={toggleMenu} className="primaryButton">
        <i class="fas fa-bars fa-2x"></i>
      </button>

    </div>
  );
};

export default Navbar;

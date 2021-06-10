import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "react-flexible-sliding-menu";
import Logo from "../assets/logo_w.png";

/* window.onclick = function(event) {
  if (event.target == MenuContext) {
    
  }
} */

function Menu() {
  const { closeMenu } = useContext(MenuContext);

  return (
    <div className="Menu">
      <div id="NavC">
        <img src={Logo} alt="Logo" />
      </div>
      <div id="NavLinks">
        <Link to="/">
          Home     <br/> <hr/> <br/> 
        </Link>
        <Link to="/wineries">
          Wineries <br/> <hr/> <br/>
        </Link>
        <Link to="/about">
          About    <br/> <hr/> <br/>
        </Link>
        <Link to="/contact">
          Contact  <br/> <hr/> <br/>
        </Link>
      </div>
      {/* 
      <button onClick={closeMenu} className="CloseBtn">
        <i class="fas fa-times"></i>
      </button> */}
    </div>
  );
}

export default Menu;

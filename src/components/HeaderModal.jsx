import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "react-flexible-sliding-menu";

/* window.onclick = function(event) {
  if (event.target == MenuContext) {
    
  }
} */

function Menu() {
  const { closeMenu } = useContext(MenuContext);

  return (
    <div className="Menu">
      <Link to="/">
        Home <br />
      </Link>
      <Link to="/wineries">
        Wineries <br />
      </Link>
      <Link to="/about">
        About <br />
      </Link>
      <Link to="/contact">
        Contact <br />
      </Link>

      {/* 
      <button onClick={closeMenu} className="CloseBtn">
        <i class="fas fa-times"></i>
      </button> */}
    </div>
  );
}

export default Menu;

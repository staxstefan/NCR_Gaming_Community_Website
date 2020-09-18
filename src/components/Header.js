import React, { useState } from "react";

// Styles
import "./Header.css";
// Components
import { Link } from "react-router-dom";

// Icons
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GiBlackBook } from "react-icons/gi";
import { MdLocalGroceryStore } from "react-icons/md";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navigationbar">
      <div className="navigationbar--logo">
        <Link className="logo--img-box" to="/"><img
          src="https://esdialdt.sirv.com/Images/LSPD_NCRP.png"
          alt="NCR PD Logo"
        /></Link>
      </div>
      <div className="navigationbar--items">
        <div className="navigationbar--hamburger" onClick={handleClick}>
          {click ? <AiOutlineCloseCircle /> : <CgMenuGridO />}
        </div>
        <ul
          className={
            click ? "navigationbar--menu_mobile" : "navigationbar--menu"
          }
        >
          <li className="navigationbar--item">
            <Link to="/Portal">
              <GiBlackBook /> Portal
            </Link>
          </li>
          <li className="navigationbar--item">
            <Link to="/" target="_blank">
              <MdLocalGroceryStore /> NCR Store
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

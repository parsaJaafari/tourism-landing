import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Slidebar from "./Slidebar";

import "../index.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">Tourism Landing</div>
      <div className="links">
        <ul>
          <a href="">
            <li>Day tours</li>
          </a>
          <a href="">
            <li>Multi-day tours</li>
          </a>
          <a href="">
            <li>Attractions</li>
          </a>
          <a href="#">
            <li>Themes</li>
          </a>
        </ul>
      </div>
      <div onClick={() => setOpen(true)} className="menu-button">
        <FontAwesomeIcon icon={faBars} color="white" />
      </div>

      <Slidebar open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;

// 647px

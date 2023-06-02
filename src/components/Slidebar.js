import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import Collapse from "./Collapse";

const Slidebar = ({ open, setOpen }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={`mobileMenu ${open && "active"}`}>
      <div className="menu-button">
        <FontAwesomeIcon
          onClick={() => setOpen(false)}
          icon={faXmark}
          color="white"
        />
      </div>
      <ul className={`mobileMenu mobileMenuList ${open && "active"}`}>
        <a href="">
          <li>Home</li>
        </a>
        <a href="">
          <li>Day Tours</li>
        </a>
        <a href="">
          <li>Multi-Day Tours</li>
        </a>

        <Collapse title="Themes" isActive={isActive}>
          <li>Dark mode</li>
          <li>Light mode</li>
          <li>System</li>
        </Collapse>
      </ul>
    </div>
  );
};

export default Slidebar;

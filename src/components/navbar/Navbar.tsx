import React from "react";
import "./navbar.scss";
import { Constants } from "../../Constants";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>degirmenkagan</span>
        <div className="social">
          <a href={Constants.instagram} target="_blank">
            <img src="/instagram.png" alt="instagram" />
          </a>
          <a href={Constants.youtube} target="_blank">
            <img src="/youtube.png" alt="youtube" />
          </a>
          <a href={Constants.linkedin} target="_blank">
            <img src="/linkedin.png" alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

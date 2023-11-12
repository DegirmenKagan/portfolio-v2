import React from "react";
import "./navbar.scss";
import { Constants } from "../../Constants";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          degirmenkagan
        </motion.span>
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

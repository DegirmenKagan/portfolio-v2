import "./navbar.scss";
import { Constants } from "../../Constants";
import { Variants, motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const butVariant: Variants = {
  onhover: {
    scale: 2,
  },
  ontap: {
    scale: 1.3,
  },
};

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <Sidebar />
        <motion.span
          className="title"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.2 }}
        >
          degirmenkagan.dev
        </motion.span>
        <div className="social">
          <motion.a
            whileHover={"onhover"}
            whileTap={"ontap"}
            variants={butVariant}
            href={Constants.instagram}
            target="_blank"
          >
            <img
              src={`${Constants.imagePath}/instagram.png`}
              alt="instagram"
              loading="lazy"
            />
          </motion.a>
          <motion.a
            whileHover={"onhover"}
            whileTap={"ontap"}
            variants={butVariant}
            href={Constants.youtube}
            target="_blank"
          >
            <img
              src={`${Constants.imagePath}/youtube.png`}
              alt="youtube"
              loading="lazy"
            />
          </motion.a>
          <motion.a
            whileHover={"onhover"}
            whileTap={"ontap"}
            variants={butVariant}
            href={Constants.linkedin}
            target="_blank"
          >
            <img
              src={`${Constants.imagePath}/linkedin.png`}
              alt="linkedin"
              loading="lazy"
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

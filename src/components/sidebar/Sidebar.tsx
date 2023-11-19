import { useState } from "react";
import "./sidebar.scss";
import Links from "./links/Links";
import { Variants, motion } from "framer-motion";
import ToggleButton from "./toggleButton/ToggleButton";

const variants: Variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const backDropVariants: Variants = {
  open: {
    clipPath: "circle(3000px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
    opacity: 1,
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
    opacity: 0,
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <div className="container">
        <motion.div className="bg" variants={variants}>
          <Links />
        </motion.div>
        <motion.div
          className="backdrop"
          variants={backDropVariants}
          onClick={() => setOpen((prev) => !prev)}
        ></motion.div>
      </div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;

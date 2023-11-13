import React from "react";
import { Variants, motion } from "framer-motion";
type IProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const topVariant: Variants = {
  closed: { d: "M 2 2.5 L 20 2.5" },
  open: { d: "M 3 16.5 L 17 2.5" },
};
const midVariant: Variants = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
};
const bottomVariant: Variants = {
  closed: { d: "M 2 16.346 L 20 16.346" },
  open: { d: "M 3 2.5 L 17 16.346" },
};

const ToggleButton = (props: IProps) => {
  return (
    <button onClick={() => props.setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={topVariant}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={midVariant}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={bottomVariant}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;

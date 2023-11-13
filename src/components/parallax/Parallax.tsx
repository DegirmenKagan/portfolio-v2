import { motion } from "framer-motion";
import "./parallax.scss";
type IProps = {
  type: string;
};
const Parallax = (props: IProps) => {
  return (
    <div
      className="parallax"
      style={{
        background:
          props.type === "services"
            ? "linear-gradient(180deg,#111132,#0c0c1d)"
            : "linear-gradient(180deg,#111132,#505064)",
      }}
    >
      <motion.h1>
        {props.type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets"></motion.div>
      <motion.div className="stars"></motion.div>
    </div>
  );
};

export default Parallax;

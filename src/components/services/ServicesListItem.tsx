import { motion } from "framer-motion";
import { IServicesListItem } from "./ServiceData";

const ServicesListItem = (props: IServicesListItem) => {
  return (
    <motion.div
      className="box"
      whileHover={{ background: "lightgray", color: "black" }}
    >
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        Go
      </motion.button>
    </motion.div>
  );
};

export default ServicesListItem;

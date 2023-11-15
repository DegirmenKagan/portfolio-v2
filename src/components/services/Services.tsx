import { useRef } from "react";
import "./services.scss";
import { Variants, motion, useInView } from "framer-motion";
import { Constants } from "../../Constants";

const variants: Variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          <i>
            I aim to help your brand grow <br /> and take firm steps forward
          </i>
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src={`${Constants.imagePath}/people.webp`} alt="people" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>
            Business
          </h1>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            What I Do?
          </motion.button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            voluptas, eos error vitae qui optio facilis fugiat atque tempore
            eius dolor? Adipisci molestias sint in aliquid voluptatum tempore,
            cupiditate inventore!
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
          variants={variants}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            voluptas, eos error vitae qui optio facilis fugiat atque tempore
            eius dolor? Adipisci molestias sint in aliquid voluptatum tempore,
            cupiditate inventore!
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
          variants={variants}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            voluptas, eos error vitae qui optio facilis fugiat atque tempore
            eius dolor? Adipisci molestias sint in aliquid voluptatum tempore,
            cupiditate inventore!
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
          variants={variants}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            voluptas, eos error vitae qui optio facilis fugiat atque tempore
            eius dolor? Adipisci molestias sint in aliquid voluptatum tempore,
            cupiditate inventore!
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

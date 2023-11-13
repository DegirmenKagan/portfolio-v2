import "./hero.scss";
import { Variants, motion } from "framer-motion";

const textVariants: Variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const heroVariants: Variants = {
  onhover: {
    scale: 1.1,
    y: -70,
    rotate: -3,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const sliderVariants: Variants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>KAĞAN DEĞİRMEN</motion.h2>
          <motion.h1 variants={textVariants}>
            Frontend Developer and Youtube Content Creator
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="scrollIcon"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer Content Creator Photographer Artist
      </motion.div>

      <div className="imageContainer">
        <motion.img
          variants={heroVariants}
          whileHover={"onhover"}
          src="/hero.png"
          alt="heroIcon"
        />
      </div>
    </div>
  );
};

export default Hero;

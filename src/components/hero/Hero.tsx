import { Constants } from "../../Constants";
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
  onhover: {
    scale: 1.1,
  },
  ontap: {
    scale: 0.95,
  },
  namehover: {
    letterSpacing: "3px",
  },
  extraTitleHover: {
    color: "red",
    letterSpacing: "2px",
  },
};
const heroVariants: Variants = {
  onhover: {
    y: -30,
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
      duration: 40,
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
          <motion.h2 variants={textVariants} whileHover={"namehover"}>
            KAĞAN DEĞİRMEN
          </motion.h2>
          <motion.h1 variants={textVariants}>Frontend Developer</motion.h1>
          <motion.h3 variants={textVariants}>
            {"and also "}
            <motion.b variants={textVariants} whileHover={"extraTitleHover"}>
              Youtube Content Creator
            </motion.b>
          </motion.h3>

          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              whileHover={"onhover"}
              whileTap={"ontap"}
            >
              <a href={"#Portfolio"}>See the Latest Works</a>
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover={"onhover"}
              whileTap={"ontap"}
            >
              <a href={"#Contact"}>Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={`${Constants.imagePath}/scroll.png`}
            alt="scrollIcon"
            loading="lazy"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer, Video Editor, Photographer, Artist
      </motion.div>

      <div className="imageContainer">
        <motion.img
          variants={heroVariants}
          whileHover={"onhover"}
          src={`${Constants.imagePath}/hero.webp`}
          alt="heroIcon"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Hero;

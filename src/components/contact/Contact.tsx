import { Variants, motion } from "framer-motion";
import "./contact.scss";

const variants: Variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial={"initial"}
      whileInView={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1>Let's get started!</motion.h1>
        <motion.div className="item">
          <h2>Mail</h2>
          <span>kagan@degirmenkagan.dev</span>
        </motion.div>
        <motion.div className="item">
          <h2>Address</h2>
          <span>Izmir/Türkiye</span>
        </motion.div>
        <motion.div className="item">
          <h2>Phone</h2>
          <span>+90 530 914 41 00</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" name="" id="" />
          <input type="email" required placeholder="Email" name="" id="" />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;

import React, { RefObject, useRef } from "react";
import "./portfolio.scss";
import { Constants } from "../../Constants";
import { motion, useScroll, useSpring } from "framer-motion";

const items: IPortfolioItem[] = [
  {
    id: 0,
    title: "fine-dine-react",
    img: `${Constants.imagePath}/fine-dine-react.png`,
    desc: "A react website that aimed to create modern, responsive restaurant site.",
    link: "https://github.com/DegirmenKagan/fine-dine-react",
  },
  {
    id: 1,
    title: "digitalBusinessCard",
    img: `${Constants.imagePath}/digital-business-card.png`,
    desc: "Hello folks! I'll be improving this project in time. This is aimed to be a customizable business card.",
    link: "https://github.com/DegirmenKagan/digitalBusinessCard",
  },
];

interface IPortfolioItem {
  id: number;
  title?: string;
  img?: string;
  desc?: string;
  link?: string;
}
const Single: React.FC<IPortfolioItem> = ({ title }) => {
  return <section>{title}</section>;
};

const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single
          key={item.id}
          id={item.id}
          title={item.title}
          img={item.img}
          desc={item.desc}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default Portfolio;
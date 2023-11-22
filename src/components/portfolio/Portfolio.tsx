import React, { useEffect, useRef, useState } from "react";
import "./portfolio.scss";
import { Constants } from "../../Constants";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import useGitRepos from "../hooks/useGitRepos";

interface IPortfolioItem {
  id: number;
  title?: string;
  img?: string;
  desc?: string;
  link?: string;
}
const Single: React.FC<IPortfolioItem> = ({ title, img, desc, link }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  function checkImage(imageSrc: string, good: () => void, bad: () => void) {
    var img = new Image();
    img.onload = good;
    img.onerror = bad;
    img.src = imageSrc;
  }
  const [visible, setVisible] = useState(false);
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  useEffect(() => {
    console.log(img);
    checkImage(
      img || "",
      () => {
        setVisible(true);
      },
      () => {
        setVisible(false);
      }
    );
  }, [img]);

  return (
    <>
      {visible ? (
        <section>
          <div className="container">
            <div className="wrapper">
              <div className="imageContainer" ref={ref}>
                <img src={img} alt={`${title}_img`} loading="lazy" />
              </div>
              <motion.div className="textContainer" style={{ y }}>
                <h2>{title}</h2>
                <p>{desc}</p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={
                    link
                      ? {}
                      : { backgroundColor: "gray", pointerEvents: "none" }
                  }
                >
                  <a href={link} target="_blank">
                    See In Github
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
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

  const { repos, loading } = useGitRepos("degirmenkagan");
  const [items, setItems] = useState<IPortfolioItem[]>([]);

  useEffect(() => {
    if (!loading && repos) {
      setItems(
        (repos || []).map((repo) => ({
          id: repo.id,
          title: repo.name,
          img: `${Constants.imagePath}/${repo.name}.jpeg`,
          desc: repo.description,
          link: repo.html_url,
        }))
      );
    }
  }, [repos]);

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

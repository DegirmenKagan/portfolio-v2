import React, { useCallback, useEffect, useRef, useState } from "react";
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

  const checkImageExists = async (imageSrc: string) => {
    const response = await fetch(imageSrc, { method: "HEAD" });
    return response.ok;
  };
  const [visible, setVisible] = useState(false);
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const loadImage = useCallback(async (img: string) => {
    const imageExists = await checkImageExists(img);
    setVisible(imageExists);
  }, []);

  useEffect(() => {
    img && loadImage(img);
  }, [img, loadImage]);

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
                <div className="buttonContainer">
                  <motion.div
                    className="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={
                      link
                        ? {}
                        : { backgroundColor: "gray", pointerEvents: "none" }
                    }
                    onClick={() =>
                      window.open(`${Constants.projects}${title}`, "_blank")
                    }
                  >
                    See Demo
                  </motion.div>
                  <motion.div
                    className="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={
                      link
                        ? {}
                        : { backgroundColor: "gray", pointerEvents: "none" }
                    }
                    onClick={() => window.open(link, "_blank")}
                  >
                    See In Github
                  </motion.div>
                </div>
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

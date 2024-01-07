import React, { useCallback, useEffect, useRef, useState } from "react";
import "./portfolio.scss";
import { Constants } from "../../Constants";
import { motion, useScroll, useSpring } from "framer-motion";
import useGitRepos from "../hooks/useGitRepos";

interface IPortfolioItem {
  id: number;
  title?: string;
  img?: string;
  desc?: string;
  link?: string;
  language?: string;
}
const Single: React.FC<IPortfolioItem> = ({
  title,
  img,
  desc,
  link,
  language,
}) => {
  const ref = useRef(null);
  const checkImageExists = async (imageSrc: string) => {
    const response = await fetch(imageSrc, { method: "HEAD" });
    return response.ok;
  };
  const [visible, setVisible] = useState(false);

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
              <motion.div className="textContainer">
                <h2>{title}</h2>
                <p>{desc ?? ""}</p>
                <div className="buttonContainer">
                  <motion.div
                    className="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={
                      link && language?.toLocaleLowerCase() !== "swift"
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
  const [IOSVisible, setIOSVisible] = useState(false);

  useEffect(() => {
    if (!loading && repos) {
      setItems(
        (repos || [])
          .filter((x) =>
            x.language
              ?.toLocaleLowerCase()
              ?.includes(IOSVisible ? "swift" : "script")
          )
          .map((repo) => ({
            id: repo.id,
            title: repo.name,
            img: `${Constants.imagePath}/${repo.name}.jpeg`,
            desc: repo.description,
            link: repo.html_url,
            language: repo.language,
          }))
      );
    }
  }, [repos, IOSVisible]);

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <div className="progressTitle">
          <h1>Featured Works</h1>
          <motion.a
            className="progressButton"
            href="#PortfolioItems"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIOSVisible(true)}
            style={{ backgroundColor: IOSVisible ? "orange" : "gray" }}
          >
            iOS
          </motion.a>
          <motion.a
            className="progressButton"
            href="#PortfolioItems"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIOSVisible(false)}
            style={{ backgroundColor: !IOSVisible ? "orange" : "gray" }}
          >
            Frontend
          </motion.a>
        </div>
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
          language={item.language}
        />
      ))}
    </div>
  );
};

export default Portfolio;

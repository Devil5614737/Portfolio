import Link from "../assets/link.svg";
import Github from "../assets/github.svg";
import { urlFor } from "../client";
import { motion } from "framer-motion";

export const Card = ({ demo, github, title, image, desc }) => {
  return (
    <motion.div
      whileInView={{
        x: [0, 0],
        y: [100, 0],
        opacity: [0, 1],
      }}
      transition={{ duration: 0.5, type: "spring" }}
      className="card"
    >
      <div className="thumbnail">
        <img src={urlFor(image)} alt="project thumbnail" />
        <div className="links">
          <a rel="noreferrer" target="_blank" href={demo} title="demo">
            <img src={Link} alt="icon" />
          </a>
          <a rel="noreferrer" target="_blank" href={github} title="code">
            <img src={Github} alt="icon" />
          </a>
        </div>
      </div>
      <div className="cardInfo">
        <p className="title">{title}</p>
        <p className="info">{desc}</p>
      </div>
    </motion.div>
  );
};

// import { Button } from "./Button";
import { Card } from "./Card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { client } from "../client";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  // const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type=="projects"]';

    client.fetch(query).then((data) => setProjects(data));
  }, []);

  

  return (
    <div  className="projects">
      <div className="wrapper">
        <div className="titleContainer">
          <p>Projects</p>
          <p>
            here are some of my <span>projects</span>
          </p>
          {/* <div className="buttonContainer">
            {["All", "Web App", "Clone", "Vanilla Js"].map((item, index) => (
              <Button
                key={index}
                onClick={() => handleFilter(item)}
                className="btn"
              >
                {item}
              </Button>
            ))}
          </div> */}
        </div>

        <motion.div
          whileInView={{
            x: [0, 0],
            y: [100, 0],
            opacity: [0, 1],
          }}
          transition={{ duration: 0.5, type: "spring" }}
          className="cardContainer"
        >
          {projects.map((project) => (
            <Card
              key={project._id}
              demo={project.demoLink}
              github={project.githubLink}
              title={project.title}
              image={project.imageUrl.asset._ref}
              desc={project.desc}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

import { Button } from "./Button";
import { Card } from "./Card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { client } from "../client";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "All",
      active:true
    },
    {
      id: 2,
      title: "Web App",
    },
    {
      id: 3,
      title: "Clone",
    },
    {
      id: 4,
      title: "Vanilla Js",
    },
    {
      id: 5,
      title: "Native Apps",
    },
  ]);

  useEffect(() => {
    const query = '*[_type=="projects"]';

    client.fetch(query).then((data) => {
      setProjects(data);
      setFilterWork(data);
    });
  }, []);

  const handleFilter = (item) => {
    setCategories(
      categories.map((category) =>
        category.id === item.id
          ? { ...category, active: true }
          : { ...category, active: false }
      )
    );
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

   
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item.title === "All") {
        setFilterWork(projects);
      } else {
        setFilterWork(projects.filter((work) => work.category === item.title));
      }
  
  };


  return (
    <div className="projects">
      <div className="wrapper">
        <div className="titleContainer">
          <p>Projects</p>
          <p>
            here are some of my <span>projects</span>
          </p>
          <div className="buttonContainer">
            {categories.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleFilter(item)}
                className="btn"
                style={{
                  background:item.active?'blue':'white',
                  color:item.active?'white':'black',
                }}
              >
                {item.title}
              </Button>
            ))}
          </div>
        </div>

        <motion.div
          whileInView={{
            x: [0, 0],
            y: [100, 0],
            opacity: [0, 1],
          }}
          // transition={{ duration: 0.5, type: "spring" }}
          className="cardContainer"
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          {filterWork.map((project) => (
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

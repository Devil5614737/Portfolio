import Download from "../assets/download.svg";
import { useEffect, useState } from "react";
import { client, urlFor } from "../client";
import {motion} from 'framer-motion';

export const About = () => {
  const [about, setAbout] = useState();

  useEffect(() => {
    const query = '*[_type=="about"]';

    client.fetch(query).then((data) => setAbout(data));
  }, []);

  return (
    <div

       className="container"
    >
      <div className="title">
        <p>About</p>
      </div>
      <div    className="wrapper">
        {about&&about.map((item) => (
          <motion.div whileInView={{
            x:[-100,0],
          
            opacity:[0,1]
        }}
        transition={{duration:0.5,type:'spring'}} key={item._id} className="content">
            <div className="me">
              <img src={urlFor(item.imageUrl)} alt="me" />
            </div>
            <div className="about">
              <p>{item.desc}</p>
              <a href={item.resumeLink} rel='noreferrer' target="_blank" className="resume">
                <img src={Download} alt="icon" />
                Resume
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

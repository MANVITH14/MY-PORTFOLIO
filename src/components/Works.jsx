import React from "react";
import { motion } from "framer-motion";
import InteractiveCard from "./InteractiveCard";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import livelink from "../assets/liveLink.png";

// Interactive 3D project cards are rendered by `InteractiveCard`

const Works = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2
          className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}
        >
          Projects.
        </h2>
      {/* </motion.div> */}

      <div className="w-full flex">
        <p
          variants={fadeIn("", "", 1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <InteractiveCard key={`project-${index}`} project={project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

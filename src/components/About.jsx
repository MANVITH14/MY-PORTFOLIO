import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { manvith } from "../assets";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}>Overview.</h2>
      </div>
      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        <div className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          <p>
            Hello! I'm <strong>MANVITH</strong> — an AI & Data Science Undergraduate and an aspiring
            software engineer based in Mangalore, Haleangadi. I work with Python,
            machine learning libraries and web technologies to build data-driven
            solutions and intuitive web experiences. My current focus is on
            projects that combine AI with practical applications, such as crop
            price prediction and computer-vision tools for public safety.
          </p>

          <div className="mt-4">
            <h3 className="text-white font-bold">Education</h3>
            <p className="text-secondary">B.E. in Artificial Intelligence & Data Science — AJ Institute of Engineering & Technology (Expected 2027)</p>
          </div>

          <div className="mt-4">
            <h3 className="text-white font-bold">Skills</h3>
            <ul className="list-disc pl-5 text-secondary">
              <li><strong>Programming Languages:</strong> C, C++, Java, Python</li>
              <li><strong>Databases:</strong> MySQL, MongoDB, DBMS</li>
              <li><strong>Data & Visualization:</strong> Excel, Power BI, Tableau</li>
              <li><strong>Web:</strong> HTML, CSS</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-white font-bold">Certifications</h3>
            <ul className="list-disc pl-5 text-secondary">
              <li>NPTEL – The Joy of Computing Using Python</li>
              <li>Microsoft – AI Innovation 2025 Challenge</li>
              <li>Microsoft – Azure Learning Challenge</li>
              <li>Great Learning – Artificial Intelligence Project</li>
              <li>Coursera – Creating Dashboards and Storytelling with Tableau</li>
            </ul>
          </div>

          <div className="mt-4">
            <p>
              Explore my projects and get in touch at{' '}
              <a
                href="mailto:manvithmanu225@gmail.com"
                className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black"
              >
                manvithmanu225@gmail.com
              </a>
              . Phone: <a className="text-secondary">+91 8618153704</a>
            </p>
            <p className="mt-2">
              GitHub: <a href="https://github.com/MANVITH14" target="_blank" rel="noreferrer" className="text-secondary">github.com/MANVITH14</a> — LinkedIn: <a href="https://www.linkedin.com/in/manvith-manvith-960b3b251" target="_blank" rel="noreferrer" className="text-secondary">manvith-manvith-960b3b251</a>
            </p>
          </div>
        </div>
        <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
          <div
            variants={fadeIn("", "", 0.5, 1)}
            className="xs:w-[350px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div
              options={{ max: 45, scale: 1, speed: 450 }}
              className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden"
            >
              <img
                src={manvith}
                alt="manvith"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Tilt>
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

import styles from "../styles/skills.module.css";
import Image from "next/image";
import { useState } from "react";
import Skill from './Skill';
import "animate.css";

export default function Skills() {
  const [skillsData, setSkillsData] = useState([
    {
      title: "Web Development",
      img: "/images/web-dev.png",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Front End",
      img: "/images/front-end.png",
      technologies: ["React", "Next.JS", "Tailwind"],
    },
    {
      title: "Back End",
      img: "/images/back-end.png",
      technologies: ["Node.JS", "Express", "JWT"],
    },

    {
      title: "Data Bases",
      img: "/images/databases.png",
      technologies: ["SQL", "MongoDB"],
    },
    {
      title: "Other Technologies",
      img: "/images/other-tech.png",
      technologies: ["Redux", "Sass", "WebPack", "React-native"],
    },
  ]);
  return (
    <div className={styles.container}>
      <div>
        <h1 className={`${styles.title} animate__animated animate__fadeInLeft`}>My Skills</h1>
        <div className={`${styles.skills} animate__animated animate__fadeInLeft`}>

          {
            skillsData.map((sk,i) => (
              <Skill
                key = {i.toString()}
                title = {sk.title}
                img = {sk.img}
                technologies = {sk.technologies}
              />
            ))
          }
        </div>
      </div>

      <div className={`${styles.image} animate__animated animate__fadeInDown`}>
        <Image
          src={"/images/skills-back.png"}
          alt="skills-image"
          width={900}
          height={700}
        />
      </div>
    </div>
  );
}

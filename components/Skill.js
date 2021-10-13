import styles from "../styles/skills.module.css";
import Image from "next/image";

export default function Skill({ title, img, technologies }) {
  return (
    <div className={styles.skill}>
      <div className = {styles.iconImage}>
        <Image src={img} width={70} height={70} alt="skill-ilustration" />
      </div>

      <div>
        <h2>{title}</h2>
        {technologies.map((tech) => (
          <span key={Date.now()}>{tech}</span>
        ))}
      </div>

    </div>
  );
}

import styles from "../styles/projects.module.css";
import Link from "next/link";
import Image from 'next/image';

export default function Project({ name, desc, img, live_link, git_hub_link }) {
  return (
    <div className={styles.project}>
      <div className = {styles.projectImage}>
        <Image
          src = {`${img}`}
          width = {400}
          height = {400}
          alt = "project-image"
          quality = "100"
        />
      </div>
      <div>
        <h1>{name}</h1>
        <p>{desc}</p>

        {live_link && (
          <Link href={`${live_link}`}>
            <a target="_blank">
              <button className={`${styles.live} ${styles.btn}`}>
                Live Demo
              </button>
            </a>
          </Link>
        )}

        <Link href={`${git_hub_link}`}>
          <a target="_blank">
            <button className={`${styles.github} ${styles.btn}`}>
              Git Hub{" "}
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}

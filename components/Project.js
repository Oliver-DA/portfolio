import styles from "../styles/projects.module.css";
import Link from "next/link";
import Image from 'next/image';

export default function Project({ name, desc, img, live_link, git_hub_link,icon }) {
  return (
    <div className={styles.project}>
      <div className = {styles.projectImage}>
        <Image
          src = {`${img}`}
          width = {400}
          height = {400}
          alt = "project-image"
        />
      </div>
      <div>
        <h1>{name}{icon}</h1>
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
              GitHub{" "}
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}

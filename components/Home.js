import Image from "next/image";
import Link from "next/link";
import styles from "../styles/home.module.css";
import { AiOutlineSearch, AiFillGithub } from "react-icons/ai";
import "animate.css";

export default function Home() {
  return (
    <>
      <div className={`${styles.home} animate__animated animate__fadeInLeft`}>
        <div className={styles.content}>
          <span className={styles.name}>Oliver Duran</span>
          <h1 className={styles.subHeader}>Full Stack Developer</h1>
          <p>
            Hey There! <span>&#128075;</span> <span>&#128516;</span> I am Oliver
            a self-taught Full Stack Developer and a long life learner and
            student with determination on learning as much as I can, sharing it
            with other people <span>&#127758; </span>
            and applying it to help, teach and motivate others on my way to
            become a professional in this industry since it is something that I
            have always been passionate about <span>&#128293;</span>.
          </p>
          <div
            className={`${styles.buttons} animate__animated animate__fadeInRight`}
          >
            <Link href={`https://github.com/Oliver-DA?tab=repositories`}>
              <a target="_blank">
                <button className={`${styles.button} ${styles.git}`}>
                  GitHub{" "}
                  <AiFillGithub className={styles.searchIcon} size={26} />{" "}
                </button>
              </a>
            </Link>

            <Link href={`/projects`}>
              <a>
                <button className={`${styles.button} ${styles.search}`}>
                  My work{" "}
                  <AiOutlineSearch className={styles.searchIcon} size={25} />{" "}
                </button>
              </a>
            </Link>
          </div>
        </div>

        <div className={styles.image}>
          <Image
            src={"/images/home.png"}
            alt="home-ilustration"
            width={1100}
            height={800}
          />
        </div>
      </div>
    </>
  );
}

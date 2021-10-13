import styles from "../styles/about.module.css";
import Image from "next/image";
import "animate.css";
import Link from 'next/link';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className="animate__animated animate__fadeInLeft">
          <h1 className={styles.title}>About me</h1>
          <p>
          <span>&#10024;</span>Programming has always been in my mind since I knew about it, being able to bring solutions, fun, help, and connections between people with just a few lines of code <span>&#128187;</span> it is just awesome <span>&#127775;</span> <span>&#128079;</span>. I always try to learn from other people and from myself this has indeed helped polish my teamwork skills and I could say that it is one of my biggest strengths <span>&#128170;</span> <span>&#127905;</span>, being able to listen and actually put effort into understanding the point of view of the person talking to me.
          </p>
          <Link href = "/contact">
            <a>
              <button className={styles.button}>Get in touch</button>
            </a>
          </Link>
        </div>
        <div
          className={`${styles.image} animate__animated animate__fadeInRight`}
        >
          <Image
            src={"/images/about.png"}
            alt="home-ilustration"
            width={800}
            height={700}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

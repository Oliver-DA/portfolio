import styles from "../styles/education.module.css";
import Image from "next/image";
import Link from 'next/link';
import "animate.css";


export default function Education() {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={`${styles.educationCard} animate__animated animate__fadeInRight`}>
          <Image
            src={"/images/treehouse.png"}
            width={150}
            height={150}
            alt="education-ilustration"

          />
          <span className={styles.desc}>Full Stack JavaScript Developer</span>
          <Link href="https://www.credential.net/b69ef9f4-53e8-4fe4-8bc7-c63516f37b22#gs.dcjmg6">
            <a className={styles.certificate}>Certificate</a>
          </Link>
        </div>
        <div className={`${styles.educationCard} animate__animated animate__fadeInRight`}>
          <Image
            src={"/images/udemy-logo.png"}
            width={120}
            height={120}
            alt="education-ilustration-1"

          />
          <span className={styles.desc}>
            Various Courses plus intense training related to software
            development
          </span>
        </div>
        <div className={`${styles.image} animate__animated animate__fadeInDown`}>
          <Image
            src={"/images/education.png"}
            alt="education-ilustration-2"
            width = {600}
            height={400}

          />
        </div>

      </div>
    </div>
  );
}

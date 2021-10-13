import styles from "../styles/contact.module.css";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";
import { useRef, useEffect } from "react";
import "animate.css";

export default function Contact() {

  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);


  return (
    <div className={styles.container}>

      <div
        className={`${styles.image} animate__animated animate__fadeInRight`}
      >
        <Image
          src={"/images/email.png"}
          width={400}
          height={400}
          alt="contact"
          quality="100"
        />
      </div>
      <div
        className={`${styles.imageTwo} animate__animated animate__fadeInRight`}
      >
        <Image
          src={"/images/email1.png"}
          width={400}
          height={400}
          alt="contact"
          quality="100"
        />
      </div>

      <h1 className={styles.title}>Send me an email &#128235;</h1>

      <form className={`${styles.form} animate__animated animate__fadeInLeft`}>


          <div className={styles.field}>
            <label>Name:</label>
            <input type="text" name="email" ref={emailRef} />
          </div>

          <div className={styles.field}>
            <label>Subject:</label>
            <input type="text" name="subject" />
          </div>

          <div className={styles.field}>
            <label>Message:</label>
            <textarea type="text" rows="4"></textarea>
          </div>

        <button type="submit" className={styles.button}>
          Send
          <RiSendPlaneFill className={styles.searchIcon} size={25} />
        </button>

      </form>
    </div>
  );
}

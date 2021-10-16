import Image from "next/image";
import styles from "../styles/home.module.css";

export default function Thanks() {
  return (
    <div className={styles.error}>
      <div>
        <Image
          src={"/images/thankyou.png"}
          alt="thanks-ilustration"
          width={700}
          height={600}
          quality = {100}
        />
      </div>
      <div>
        <h1 className = {styles.errorTitle}>Your message was sent</h1>
      </div>
    </div>
  );
}

import Image from "next/image";
import styles from "../styles/home.module.css";

export default function NotFound() {
  return (
    <div className =  {styles.error}>
      <div>
        <Image
          alt="error-page"
          src={"/images/not-found.png"}
          width={800}
          height={800}
        />
      </div>
      <div>
        <h1 className = {styles.errorTitle}>The page you were looking for could not be found</h1>
      </div>
    </div>
  );
}

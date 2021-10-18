import styles from "../styles/contact.module.css";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";
import { useRef, useEffect } from "react";
import "animate.css";
import { useFormik } from "formik";
import * as Yup from 'yup'

export default function Contact() {

  //Formik
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
  }
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    subject: Yup.string().required('Required'),
    message: Yup.string().required('Required')
  });

  const onSubmit = () => {
    return
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  //React Hooks
  const nameRef = useRef();
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (

    <div className={styles.container}>
      <div className={`${styles.image} animate__animated animate__fadeInDown`}>
        <Image
          src={"/images/email.png"}
          width={400}
          height={400}
          alt="contact-ilustration"
        />
      </div>
      <div
        className={`${styles.imageTwo} animate__animated animate__fadeInDown`}
      >
        <Image
          src={"/images/email1.png"}
          width={400}
          height={400}
          alt="contact-ilustration-1"
        />
      </div>

      <h1 className={styles.title}>Send me an email &#128235;</h1>

      <form
        onSubmit={Object.keys(formik.errors).length >= 1 ? formik.handleSubmit : null}
        action= "https://formsubmit.co/ondagmsinfo@gmail.com" method = "POST"
        className={`${styles.form} animate__animated animate__fadeInLeft`}
      >
        <input type="hidden" name="_next" value="https://portfolio-two-bay-32.vercel.app/thanks"/>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Email from portfolio!!!" />

        <div className={styles.field}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            ref={nameRef}
            {...formik.getFieldProps("name")}
          />

          {formik.touched.name && formik.errors.name ? (
            <div className={styles.errorField}>{formik.errors.name} *</div>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            {...formik.getFieldProps("email")}
          />

          {formik.touched.email && formik.errors.email ? (
            <div className={styles.errorField}>{formik.errors.email} *</div>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            name="subject"
            {...formik.getFieldProps("subject")}
          />

          {formik.touched.subject && formik.errors.subject ? (
            <div className={styles.errorField}>{formik.errors.subject} *</div>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            name="message"
            rows="4"
            {...formik.getFieldProps("message")}
          ></textarea>

          {formik.touched.message && formik.errors.message ? (
            <div className={styles.errorField}>{formik.errors.message} *</div>
          ) : null}
        </div>

        <button type="submit" className={styles.button}>
          Send
          <RiSendPlaneFill className={styles.searchIcon} size={25} />
        </button>
      </form>
    </div>
  );
}

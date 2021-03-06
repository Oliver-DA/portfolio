import { useState } from "react";
import styles from "../styles/projects.module.css";
import Image from "next/image";
import Project from './Project'
import "animate.css";


export default function Projects() {
  const [projectData, setProjectData] = useState([
    {
      name: "React Full Stack App ",
      icon: <span>&#127891;</span>,
      img: "/images/books.jpg",
      desc: "A complete React app to manage courses with user authorization and authentication.",
      live_link: "https://mystifying-hoover-06bb60.netlify.app/",
      git_hub_link: "https://github.com/Oliver-DA/full-stack-react-api",
    },
    {
      name: "React node-send ",
      icon: <span>&#128171;</span>,
      img: "/images/node-send.png",
      desc: "This is a clone of Firefox send with a few limitations on file size but you can still share files up to 10MB.",
      live_link: "https://node-send-client-lemon.vercel.app/",
      git_hub_link: "https://github.com/Oliver-DA/node-send-client",
    },
    {
      name: "Phrase Hunter Game ",
      icon: <span>&#127919;</span>,
      desc: " Try to guess the hidden word! with your keyboard or mouse, you have 5 lives left.",
      img: "/images/game.png",
      live_link: "https://oliver-da.github.io/oop_game-v2/",
      git_hub_link: "https://github.com/Oliver-DA/oop_game-v2",
    },
    {
      name: "SQL Library Manager ",
      icon: <span>&#128218;</span>,
      desc: "This is a book manager app using sqlite, sequelize and express as it's core allowing the user to create, update or delete books.",
      img: "/images/library.png",
      live_link: "https://enigmatic-beyond-39784.herokuapp.com/books",
      git_hub_link: "https://github.com/Oliver-DA/SQL-library-manager",
    },
    {
      name: "React And Redux CRUD ",
      icon: <span>&#10024;</span>,

      desc: "Create update or delete any product you please using a very simple api build with json-server while Redux manages all your state changes.",
      img: "/images/redux.png",
      git_hub_link: "https://github.com/Oliver-DA/crud-redux",
    },
    {
        name: "Pokedex App ",
      icon: <span>&#128270;</span>,

        desc: "Do you like pokemons ? then you should take a look into this app and try to find your favorite",
        img: "/images/pokedex.png",
        live_link: "https://pokedex-app-two.vercel.app/",
        git_hub_link: "https://github.com/Oliver-DA/pokedex-app",
      },
    {
        name: "Form Validation ",
      icon: <span>&#128203;</span>,

        desc: "Form with custome and real time errors for every input field.",
        img: "/images/form.png",
        live_link: "https://oliver-da.github.io/Intereactive-form-validation/",
        git_hub_link: "https://github.com/Oliver-DA/Intereactive-form-validation",
      },
  ]);
  return (
    <div className={styles.container}>
      <div className={`${styles.image} animate__animated animate__fadeInUp`}>
        <Image
          src={"/images/projects.png"}
          alt="projects-image"
          width={700}
          height={700}
        />
      </div>
      <div className={styles.imageTwo}>
        <Image
          src={"/images/p2.png"}
          alt="projects-image-1"
          width={700}
          height={700}
        />
      </div>
      <div className={styles.imageThree}>
        <Image
          src={"/images/p3.png"}
          alt="projects-image-2"
          width={700}
          height={600}
        />
      </div>

      <h1 className={`${styles.title}  animate__animated animate__fadeInLeft`}>Projects</h1>

      <div className={`${styles.projects}  animate__animated animate__fadeInUp`}>
          {
              projectData.map(p => (
                  <Project
                    key = {Date.now()}
                    name = {p.name}
                    desc = {p.desc}
                    img = {p.img}
                    live_link = {p.live_link}
                    git_hub_link = {p.git_hub_link}
                    icon = {p.icon}
                  />
              ))
          }
      </div>
    </div>
  );
}

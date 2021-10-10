import { useState } from "react";
import styles from "../styles/projects.module.css";
import Image from "next/image";
import Project from './Project'
import "animate.css";


export default function Projects() {
  const [projectData, setProjectData] = useState([
    {
      name: "React Full Stack App",
      img: "/images/books.jpg",
      desc: "A complete React app to manage courses with user authorization and authentication.",
      live_link: "https://mystifying-hoover-06bb60.netlify.app/",
      git_hub_link: "https://github.com/Oliver-DA/full-stack-react-api",
    },
    {
      name: "Phrase Hunter Game",
      desc: " Try to guess the hidden word! with your keyboard or mouse, you have 5 lives left.",
      img: "/images/game.png",
      live_link: "https://oliver-da.github.io/oop_game-v2/",
      git_hub_link: "https://github.com/Oliver-DA/oop_game-v2",
    },
    {
      name: "SQL Library Manager",
      desc: "This is a book manager app using sqlite, sequelize and express as it's core allowing the user to create, update or delete books.",
      img: "/images/library.png",
      live_link: "https://whispering-savannah-06035.herokuapp.com/books",
      git_hub_link: "https://github.com/Oliver-DA/SQL-library-manager",
    },
    {
      name: "React And Redux CRUD",
      desc: "Create update or delete any product you please using a very simple api build with json-server while Redux manages all your state changes.",
      img: "/images/redux.png",
      git_hub_link: "https://github.com/Oliver-DA/crud-redux",
    },
    {
        name: "Pokedex App",
        desc: "Do you like pokemons ? then you should take a look into this app and try to find your favorite",
        img: "/images/pokedex.png",
        live_link: "https://pokedex-app-two.vercel.app/",
        git_hub_link: "https://github.com/Oliver-DA/pokedex-app",
      },
    {
        name: "Form Validation",
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
          alt="projects"
          width={700}
          height={700}
          quality="100"
        />
      </div>
      <div className={styles.imageTwo}>
        <Image
          src={"/images/p2.png"}
          alt="projects"
          width={700}
          height={700}
          quality="100"
        />
      </div>
      <div className={styles.imageThree}>
        <Image
          src={"/images/p3.png"}
          alt="projects"
          width={700}
          height={700}
          quality="100"
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
                  />
              ))
          }
      </div>
    </div>
  );
}

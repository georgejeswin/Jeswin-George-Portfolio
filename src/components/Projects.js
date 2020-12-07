import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import Netflix from "./projectImages/netflix.png";
import airbnb from "./projectImages/airbnb.png";
import covid from "./projectImages/covid.png";
import discord from "./projectImages/discord.png";
import ebooks from "./projectImages/ebooks.png";
import google from "./projectImages/google.png";
import hulu from "./projectImages/hulu.png";
import imessage from "./projectImages/imessage.png";
import jobs from "./projectImages/jobs.png";
import mdb from "./projectImages/mdb.png";
import news from "./projectImages/news.png";
import spotify from "./projectImages/spotify.png";
import starkart from "./projectImages/starkart.png";
import whatsapp from "./projectImages/whatsapp.png";
import reels from "./projectImages/reels.png";
import food from "./projectImages/food.png";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="projects__header">My Projects</h1>
      <div className="projects__items">
        <ProjectCard
          className="project__item"
          image={discord}
          name="Discord Clone"
          label1="React"
          label2="Redux"
          label3="firebase"
          github="https://github.com/georgejeswin/Discord-clone.git"
          demo="https://discord-web-clone.netlify.app/"
          description="Discord Clone built with React, Redux, Firebase firestore ,Google authentication , Material UI and hosted in netlify"
        />
        <ProjectCard
          className="project__item"
          image={Netflix}
          name="Netflix clone"
          label1="React"
          label2="Context API"
          label3="firebase"
          github="https://github.com/georgejeswin/React-Netflix-clone.git"
          demo="https://netflix-clone-11068.web.app/"
          description="Netflix clone app built using React, Context API, TMDB Public API, Material UI and hosted in firebase"
        />
        <ProjectCard
          className="project__item"
          image={covid}
          name="Covid-19 Tracker"
          label1="React"
          label2="API"
          label3="GitHub"
          github="https://github.com/georgejeswin/Covid-19-tracker--React.git"
          demo="https://covid-19-daily-tracker.netlify.app/"
          description="Covid-19 daily Worldwide tracker built with React, covid 19 public API and hosted in netlify"
        />

        <ProjectCard
          className="project__item"
          image={news}
          name="News App"
          label1="React"
          label2="Material UI"
          label3="netlify"
          github="https://github.com/georgejeswin/News-Blog-React.git"
          demo="https://news-blog-app.netlify.app/"
          description="Live news app built with React , Redux, Material UI, news public API and hosted in netlify"
        />
        <ProjectCard
          className="project__item"
          image={whatsapp}
          name="WhatsApp Web Clone"
          label1="React"
          label2="Context API"
          label3="firebase"
          github="https://github.com/georgejeswin/WhatsApp-Web-clone.git"
          demo="https://whatsapp-web-cloneapp.web.app/"
          description="WhatsApp web clone built using React, Google Authentication, Material UI Firebase firestore and hosted in netlify"
        />

        <ProjectCard
          className="project__item"
          image={airbnb}
          name="Airbnb clone"
          label1="React"
          label2="Material UI"
          label3="firebase"
          github="https://github.com/georgejeswin/React-Airbnb-clone.git"
          demo="https://airbnb-clone-4b0b4.web.app/"
          description="Airbnb clone built with React, Firebase, Material UI and hosted in firebase"
        />
        <ProjectCard
          className="project__item"
          image={hulu}
          name="Hulu Clone"
          label1="React"
          label2="Material UI"
          label3="firebase"
          github="https://github.com/georgejeswin/React-Hulu-clone.git"
          demo="https://hulu-clone-c436f.web.app/"
          description="Hulu Clone built with React, TMDB public API, Material UI and hosted in netlify"
        />
        <ProjectCard
          className="project__item"
          image={spotify}
          name="Spotify clone"
          label1="React"
          label2="Context API"
          label3="firebase"
          github="https://github.com/georgejeswin/React-spotify-clone.git"
          demo="https://spotify-clone-bc5d8.web.app/"
          description="Spotify clone app built using React, Context API, Spotify authentication, Material UI and hosted in firebase"
        />
        <ProjectCard
          className="project__item"
          image={google}
          name="Google Search clone"
          label1="React"
          label2="Context API"
          label3="firebase"
          github="https://github.com/georgejeswin/React-Google-clone-PWA.git"
          demo="https://googlesearch-clone.netlify.app/"
          description="Google search clone app built using React, Context API, Googele developer API, Material UI and hosted in netlify"
        />

        <ProjectCard
          className="project__item"
          image={imessage}
          name="iMessage Clone"
          label1="React"
          label2="Redux"
          label3="firebase"
          github="https://github.com/georgejeswin/React-Redux-iMessage-clone.git"
          demo="https://imessage-clone-c5ea3.web.app/"
          description="iMessage Clone built with React, Redux, Firebase firestore ,Google authentication , Material UI and hosted in firebase"
        />

        <ProjectCard
          className="project__item"
          image={mdb}
          name="Movie Database App"
          label1="React"
          label2="OMDB"
          label3="netlify"
          github="https://github.com/georgejeswin/Movie-Database-React.git"
          demo="https://movies-database-app.netlify.app/"
          description="Movie searching database built with React, OMDB public API and hosted in netlify"
        />

        <ProjectCard
          className="project__item"
          image={starkart}
          name="Starkart"
          label1="Nodejs"
          label2="Express"
          label3="Bootstrap"
          github=""
          demo=""
          description="Ecommerce web app built with Node js, Express, Handlebars, Bootstrap "
        />
        <ProjectCard
          className="project__item"
          image={jobs}
          name="GitHub Jobs"
          label1="React"
          label2="Github"
          label3="netlify"
          github="https://github.com/georgejeswin/React-GitHub-jobs.git"
          demo="https://github-job-app.netlify.app/"
          description="GitHub jobs searching app built with React, GitHub jobs API and hosted in netlify"
        />

        <ProjectCard
          className="project__item"
          image={reels}
          name="Instagram reels clone"
          label1="React"
          label2="firebase"
          label3="PWA"
          github="https://github.com/georgejeswin/React-Instagram-Reels-clone-PWA.git"
          demo="https://instagram-reels-clone-24632.web.app/"
          description="Instagram Reels clone app built with React Hooks, firebase, firestore, Material UI and hosted in firebase"
        />
        <ProjectCard
          className="project__item"
          image={ebooks}
          name="Ebooks"
          label1="HTML"
          label2="CSS"
          label3="JavaScript"
          github="https://github.com/georgejeswin/ebooks.git"
          demo="https://georgejeswin.github.io/ebooks/"
          description="Online Tech book reading web app with HTML5,CSS3 and JavaScript"
        />

        <ProjectCard
          className="project__item"
          image={food}
          name="Food Recipe app"
          label1="public API"
          label2="netlify"
          label3="React"
          github="https://github.com/georgejeswin/Food-recipe-app-React.git"
          demo="https://food-recipe-webapp.netlify.app/"
          description="Food searching and recipe app built with React Hooks, public API, and hosted in netlify "
        />
      </div>
    </div>
  );
};

export default Projects;

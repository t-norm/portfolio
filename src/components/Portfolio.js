import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Pawgers",
    tech: "Handlebars, Express, MVC",
    image: "/img/pawgers.png",
    description: "A social media platform for posting about dogs with adoption services included.",
    repo: "https://github.com/Thesselonian/Pawgers",
    live: "https://pawgers.herokuapp.com/",
  },
  {
    id: 1,
    title: "Streamability",
    tech: "Interactive front end, Third Party APIs",
    image: "/img/streamability.png",
    description: "A one-stop-shop for movie and TV show streaming avialability.",
    repo: "https://github.com/Thenlie/Streamability/tree/main/public/assets",
    live: "https://streamability.herokuapp.com/",
  },
  {
    id: 2,
    title: "NoSQL Social Network API",
    tech: "MongoDB, REST API, Mongoose, Express",
    image: "/img/socialAPI.png",
    description: "An API layer for use in a social network, made with MongoDB",
    repo: "https://github.com/t-norm/NoSQL-Social-Network-API",
    live: "https://github.com/t-norm/NoSQL-Social-Network-API",
  },
  {
    id: 3,
    title: "Tech Blog",
    tech: "MVC, Sequalize, Express, Node, Handlebars",
    image: "/img/blog.png",
    description: "CMS-style tech blog using Model-View-Controller paradigm.",
    repo: "https://github.com/t-norm/model-view-contorller-tech-blog",
    live: "https://t-norm-tech-blog.herokuapp.com/",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    tech: "Third party APIs, Javascript",
    image: "/img/weather.png",
    description: "Weather tool supporting world-wide city searches.",
    repo: "https://github.com/t-norm/weather-dashboard",
    live: "https://t-norm.github.io/weather-dashboard/",
  },
  {
    id: 5,
    title: "Food-Festival",
    tech: "Webpack, Chrome Dev Tools",
    image: "/img/food.png",
    description: "An app for a ficticious food festival intended to showcase ability to optimize an application using the concepts of PWA.",
    repo: "https://github.com/t-norm/food-festival",
    live: "https://github.com/t-norm/food-festival",
  },
];

function Portfolio() {
  return (
    <div className="bg-light mt-5">
      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
import React from "react";
import { Element } from "react-scroll";
import { SocialLink } from "./SocialLink";
import TextLoop from "react-text-loop";
// import bg from '../assets/images/bg.jpg'
import MouseIcon from "../components/MouseIcon";

const socialLinks = [
  {
    fontAwesomeIcon: "github",
    name: "Github Profile",
    url: "https://github.com/Bilguun132"
  },
  {
    fontAwesomeIcon: "medium",
    name: "Medium Articles",
    url: "https://medium.com/@bilguun132"
  },
  {
    fontAwesomeIcon: "google",
    name: "Contact me",
    url: "mailto:bilguun132@gmail.com"
  },
  {
    fontAwesomeIcon: "linkedin",
    name: "LinkedIn",
    url: "https://sg.linkedin.com/in/bilguun-batbold-771b58125"
  }
];

export const Home = () => {
  return (
    <Element
      name="home"
      className="justify-center flex-col items-center flex h-screen"
      // style={{backgroundImage: `url(${bg})`}}
    >
      <p className="text-2xl tracking-wide font-bold text-primary text-center md:text-6xl md:tracking-wider m-4">
        Hello, I'm Bilguun!
      </p>
      <TextLoop
        className="tracking-wide font-bold text-primary text-center md:text-5xl md:tracking-wider m-4"
        children={[
          "Mobile 📱",
          "Backend 📃",
          "Web 🖥️",
          "Test Driven Development 👨‍💻",
          "Agile & Scrum 🗣️"
        ]}
        interval={2000}
      />
      <div className="flex flex-row flex-wrap m-4 justify-center">
        {socialLinks.map((link, index) => {
          return <SocialLink key={index} {...link} />;
        })}
      </div>
      <MouseIcon />
    </Element>
  );
};

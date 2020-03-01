import React from "react";
import { Element } from "react-scroll";

export const About = () => {
  return (
    <Element
      name="about"
      className="justify-center flex flex-col h-screen m-10 md:m-20 leading-relaxed"
    >
      <div className="self-start text-primary w-auto text-3xl border-b-2 border-secondary">
        About Me
      </div>
      <div className="flex">
        <div className="mt-8 ml-8">
          Hello{" "}
          <span role="img" aria-label="wave">
            👋
          </span>{" "}
          I'm software developer based in Singapore. I am experienced in
          building mobile, front-end and back-end applications. I aspire to be a
          full stack engineer with a focus on iOS development. Below are some of
          the skills I use extensively or have used in the past extensively as a
          software developer.
          <div className="m-2">
            <p className="mt-1">
              <strong>Industry Knowledge:</strong> Agile / Scrum Methodologies,
              TDD, Unit / UI Testing, Web Application, Mobile Applications, CI /
              CD
            </p>
            <p className="mt-1">
              <strong>Tools & Technologies:</strong> MSSQL, MySQL, MongoDB,
              ASP.Net / Core, C#, Java, Javascript, NodeJS, Python, Swift,
              Jenkins, ReactJS.
            </p>
          </div>
          <p>
            This website was built with{" "}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primaryLight border-b-2 hover:border-secondary hover:text-secondary transition ease-in duration-200"
            >
              React
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primaryLight border-b-2 hover:border-secondary hover:text-secondary transition ease-in duration-200"
            >
              TailwindCSS
            </a>
            . Feel free to explore my projects and articles below 😊
          </p>
        </div>
        <img
          className="hidden md:block mx-8 my-auto w-64 h-64 border-2 border-transparent rounded-full hover:border-secondary transition-border ease-in duration-200"
          src={require("../assets/images/logo.png")}
          alt="logo"
        />
      </div>
    </Element>
  );
};

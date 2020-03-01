import React, { useState } from "react";
import { Link } from "react-scroll";
import { HeaderNavLink } from "./HeaderNavLink";
import Slide from "react-reveal/Slide";

const NavigationLinks = [
  { title: "About", to: "about" },
  { title: "Experience", to: "experience" },
  { title: "Projects", to: "projects" },
  { title: "Articles", to: "articles" }
];

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Slide top>
      <nav
        className="bg-white shadow fixed w-screen transition ease-in duration-200 z-50"
        role="navigation"
      >
        <div className="mx-auto p-4 flex flex-wrap items-center">
          <div className="mr-4 md:mr-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
              rel="home"
            >
              <img
                className="h-12 rounded-full"
                src={require("../assets/images/logo.png")}
                alt="logo"
              />
            </Link>
          </div>
          <div className="ml-auto md:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded"
              type="button"
              onClick={() => setShowMenu(!showMenu)}
            >
              <svg
                className="h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full transition ease-in duration-200 ${
              !showMenu ? "hidden" : ""
            } md:w-auto md:flex-grow md:flex md:items-center md:justify-end`}
          >
            <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
              {NavigationLinks.map((link, index) => {
                return (
                  <HeaderNavLink
                    key={index}
                    {...link}
                    onClick={() => setShowMenu(false)}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </Slide>
  );
};

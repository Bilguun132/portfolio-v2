import React from "react";
import { Link } from "react-scroll";

export const HeaderNavLink = ({ title, to, onClick }) => {
  return (
    <li className="border-b-2 border-transparent hover:border-secondary transition ease-in duration-200">
      <Link
        activeClass="md:text-secondary"
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        onClick={onClick}
        className="block px-4 py-1 md:p-2 lg:px-4 cursor-pointer"
      >
        {title}
      </Link>
    </li>
  );
};

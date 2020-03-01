import React from "react";
import Slide from "react-reveal/Slide";
import { Element } from "react-scroll";
import PropTypes from "prop-types";

const Container = ({ id, children }) => {
  return (
    <Element
      name={id}
      className="justify-center flex flex-col h-screen m-10 md:m-20 leading-loose"
    >
      {children}
    </Element>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
};

const Header = ({ title, icon = "", label = "" }) => {
  return (
    <Slide left>
      <div className="self-start text-primary w-auto text-3xl border-b-2 border-secondary font-semibold">
        {title}{" "}
        {icon && (
          <span role="img" aria-label={label}>
            {icon}
          </span>
        )}
      </div>
    </Slide>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string
};

export default {
  Container,
  Header
};

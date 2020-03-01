import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "react-tippy";
import PropTypes from "prop-types";

const SocialLink = ({ fontAwesomeIcon, name, url }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="m-5"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Tooltip
          html={<div className="mt-4 p-4 rounded bg-gray-200">{name}</div>}
          theme="dark"
          position="bottom"
          trigger="mouseenter"
        >
          <FontAwesomeIcon
            icon={["fab", `${fontAwesomeIcon}`]}
            size="5x"
            className={`transition ease-in duration-200 ${
              hover ? "text-primaryLight" : "text-primary"
            }`}
          />
        </Tooltip>
      </a>
    </div>
  );
};

SocialLink.propTypes = {
  fontAwesomeIcon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export { SocialLink };

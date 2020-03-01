import React, { useState, useEffect } from "react";
import Section from "./Section";
import experinceMd from "../md/experience.md";
const ReactMarkdown = require("react-markdown");

export const Experience = () => {
  const [md, setMd] = useState("");
  useEffect(() => {
    fetch(experinceMd)
      .then(res => res.text())
      .then(md => setMd(md));
  }, []);

  return (
      <Section.Container id="experience">
        <Section.Header title="Experience" icon="🏢" label="office-building" />
        <div className="container mx-auto">
          <div
            className="flex items-center justify-center shadow self-center h-auto mt-8
  transform hover:shadow-lg hover:-translate-y-2 hover:shadow-md transition ease-in 
  duration-200"
          >
            <p className="p-8 self-center">
              I have listed down some of my recent work experiences briefly
              below. Please view the full resume here.
            </p>
          </div>
          <ReactMarkdown className="mt-8" source={md} />
        </div>
      </Section.Container>
  );
};

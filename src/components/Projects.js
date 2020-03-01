import React from "react";
import Section from "./Section";

export const Projects = () => {
  return (
    <Section.Container id="projects">
      <Section.Header title="Projects" icon="🖥️" label="desktop" />
      <div className="container mx-auto">
        <div
          className="flex items-center justify-center shadow self-center h-16 mt-8
transform hover:shadow-lg hover:-translate-y-2 hover:shadow-md transition ease-in 
duration-200"
        >
          <p className="p-8 self-center">Projects</p>
        </div>
      </div>
    </Section.Container>
  );
};

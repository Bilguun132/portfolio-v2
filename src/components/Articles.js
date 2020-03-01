import React from "react";
import Section from "./Section";

export const Articles = () => {
  return (
    <Section.Container id="articles">
      <Section.Header title="Articles" icon="📰" label="newspaper" />
      <div className="container mx-auto">
        <div
          className="flex items-center justify-center shadow self-center h-16 mt-8
transform hover:shadow-lg hover:-translate-y-2 hover:shadow-md transition ease-in 
duration-200"
        >
          <p className="p-8 self-center">Articles</p>
        </div>
      </div>
    </Section.Container>
  );
};

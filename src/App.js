import React, {Fragment} from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Articles } from "./components/Articles";
import { Experience } from "./components/Experience";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Articles />
    </Fragment>
  );
}
export default App;

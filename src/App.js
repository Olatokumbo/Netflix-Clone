import React from "react";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Works from "./containers/Works/Works";
import Skills from "./containers/Skills/Skills";
import "./App.css";
const App = () => {
  return (
    <div className="main">
      <Home />
      <About />
      <Works />
      <Skills />
    </div>
  );
};

export default App;

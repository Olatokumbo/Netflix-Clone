import React from "react";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Works from "./containers/Works/Works";
import Skills from "./containers/Skills/Skills";
import Contact from "./containers/Contact/Contact";
import Footer from "./containers/Footer/Footer";
import "./App.css";
const App = () => {
  return (
    <div className="main">
      <Home />
      <About />
      <Works />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

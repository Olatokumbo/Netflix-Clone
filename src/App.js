import React from "react";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Works from "./containers/Works/Works";
import "./App.css";
const App = () => {
  return (
    <div className="main">
      <Home />
      <About />
      <Works />
    </div>
  );
};

export default App;

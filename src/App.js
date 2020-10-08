import React from "react";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import "./App.css";
const App = () => {
  return (
    <div className="main">
      <Home />
      <About />
    </div>
  );
};

export default App;

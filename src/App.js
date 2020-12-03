import React from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import FooterPage from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <Skills />
      <Projects />
      <FooterPage />
    </div>
  );
}

export default App;

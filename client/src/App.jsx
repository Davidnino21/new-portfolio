import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="hero">
        <Header />
        <About />
      </div>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

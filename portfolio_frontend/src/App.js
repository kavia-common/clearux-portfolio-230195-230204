import React from "react";
import "./App.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Work from "./sections/Work";
import VisualExperimentations from "./sections/VisualExperimentations";
import Services from "./sections/Services";

// PUBLIC_INTERFACE
function App() {
  /**
   * Single-page portfolio app with in-page navigation.
   * Uses semantic landmarks: banner (header), main, and contentinfo (footer).
   */
  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Nav />

      <main id="main" className="main" role="main">
        <Home />
        <About />
        <Experience />
        <Work />
        <VisualExperimentations />
        <Services />
      </main>

      <Footer />
    </div>
  );
}

export default App;

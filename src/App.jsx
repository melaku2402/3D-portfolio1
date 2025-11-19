

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, StarsCanvas } from "./components";
import {
  Home,
  About,
  Projects,
  Experience,
  Services,
  TechStack,
  Contact,
} from "./pages";
import AboutPage from "./pages/AboutPage";
import ProjectDetail from "./pages/ProjectDetail"; 
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Feedbacks from './components/Feedbacks'
import Education from "./pages/Education";
import ExplorePage from "./pages/ExplorePage;";
const App = () => {
  return (
    <Router>
      <CustomCursor />
      <div className="relative z-0 bg-primary">
        <Routes>
          {/* Single Page Application Routes */}
          <Route
            path="/"
            element={
              <>
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Navbar />
                  <section id="home" className="section">
                    <Home />
                  </section>
                </div>

                <div className="relative z-0">
                  <section id="about" className="section">
                    <About />
                  </section>
                </div>

                <section id="services" className="section">
                  <Services />
                </section>

                <section id="tech-stack" className="section">
                  {/* <TechStack /> */}
                </section>

                <div className="relative z-0">
                  <section id="experience" className="section">
                    <Experience />
                  </section>
                </div>

                <section id="projects" className="section">
                  <Projects />
                </section>
                <Education />
                <Feedbacks />
                <div className="relative z-0">
                  <section id="contact" className="section">
                    <Contact />
                  </section>
                  <StarsCanvas />
                </div>
              </>
            }
          />
          {/* Separate Pages Routes */}
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />{" "}
          <Route path="/explore" element={<ExplorePage />} />{" "}
          {/* Add this route */}
          {/* Individual Page Routes (Optional) */}
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/experience" element={<Experience />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
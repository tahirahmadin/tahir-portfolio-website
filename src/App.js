import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Services from './components/Services';
import TechStack from './components/TechStack';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Hero />
        <Trust />
        {/* <About /> */}
        <Experience />
        <Projects />
        <Achievements />
        <Services />
        {/* <TechStack /> */}
        <CTA />
      </div>
      <Footer />
    </div>
  );
}

export default App;

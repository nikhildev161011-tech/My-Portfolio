import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#f8fafc', margin: 0, padding: 0, overflowX: 'hidden' }}>
      <Header />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}
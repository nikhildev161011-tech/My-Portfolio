import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import LeetCodeCard from './components/LeetCodeCard';
import Projects from './components/Projects';
import Contact from './components/Contact';
import DevConsole from './components/DevConsole';
import MacDock from './components/MacDock';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in window) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      <style>
        {`
          html {
            scroll-behavior: smooth;
            background-color: #000000 !important;
            color-scheme: dark;
          }

          body {
            margin: 0 !important;
            padding: 0 !important;
            background-color: #000000 !important;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
          }

          #root {
            background-color: #000000 !important;
            min-height: 100vh;
            overflow-x: hidden;
          }

          *, *::before, *::after {
            box-sizing: border-box;
          }

          .smooth-section-wrapper {
            position: relative;
            width: 100%;
            transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000px;
            will-change: transform, opacity;
          }

          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #000000;
          }

          ::-webkit-scrollbar-thumb {
            background: #1f1f23;
            border-radius: 9999px;
            border: 2px solid #000000;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #ff671f;
          }
        `}
      </style>

      <div style={{ 
        position: 'relative',
        width: '100%', 
        minHeight: '100vh', 
        backgroundColor: '#000000', 
        margin: 0, 
        padding: 0, 
        overflowX: 'hidden' 
      }}>
        
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden',
            transform: 'translateZ(0)'
          }}
        >
          <div 
            style={{
              position: 'absolute',
              top: '-10%',
              right: '-10%',
              width: '650px',
              height: '650px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 103, 31, 0.08) 0%, rgba(255, 103, 31, 0.02) 50%, transparent 75%)',
              filter: 'blur(80px)',
              transform: 'translateZ(0)'
            }}
          />

          <div 
            style={{
              position: 'absolute',
              top: '40%',
              left: '-15%',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 103, 31, 0.06) 0%, rgba(255, 103, 31, 0.01) 50%, transparent 75%)',
              filter: 'blur(90px)',
              transform: 'translateZ(0)'
            }}
          />

          <div 
            style={{
              position: 'absolute',
              bottom: '-10%',
              right: '-5%',
              width: '700px',
              height: '700px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 103, 31, 0.06) 0%, transparent 75%)',
              filter: 'blur(90px)',
              transform: 'translateZ(0)'
            }}
          />
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <Header />
          <Hero />
          
          <div className="smooth-section-wrapper">
            <About />
          </div>

          <div className="smooth-section-wrapper">
            <Education />
          </div>

          <div className="smooth-section-wrapper">
            <LeetCodeCard />
          </div>

          <div className="smooth-section-wrapper">
            <Projects />
          </div>

          <div className="smooth-section-wrapper">
            <Contact />
          </div>

          <div className="smooth-section-wrapper">
            <DevConsole />
          </div>

          <MacDock />
          <Footer />
        </div>

      </div>
    </>
  );
}

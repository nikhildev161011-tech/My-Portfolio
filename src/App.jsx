import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
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
    <div style={{ 
      position: 'relative',
      width: '100%', 
      minHeight: '100vh', 
      backgroundColor: '#000000', 
      margin: 0, 
      padding: 0, 
      overflowX: 'hidden' 
    }}>
      
      {/* Background Dark Fog Spots */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden'
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
          }}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <Hero />
        
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <About />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <Education />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <LeetCodeCard />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <Projects />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <Contact />
        </motion.div>

        <DevConsole />
        <MacDock />
        <Footer />
      </div>

    </div>
  );
}

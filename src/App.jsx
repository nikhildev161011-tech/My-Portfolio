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
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#f8fafc', margin: 0, padding: 0, overflowX: 'hidden' }}>
      <Header />
      <Hero />
      
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <About />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <Education />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <LeetCodeCard />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <Projects />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <Contact />
      </motion.div>

      <DevConsole />

      <MacDock />
      <Footer />
    </div>
  );
}
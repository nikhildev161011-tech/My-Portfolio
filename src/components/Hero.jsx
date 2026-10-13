import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');

          .photo-modern-shadow {
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.12), 0 0 15px rgba(37, 99, 235, 0.12);
          }

          .cursive-heading {
            font-family: 'Caveat', cursive;
            font-size: 2rem;
            font-weight: 700;
            letter-spacing: 0.03em;
            color: #0f172a;
            margin: 0;
          }

          .primary-action-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 0.65rem 1.25rem;
            background: #2563eb;
            color: #ffffff;
            border: 1px solid #2563eb;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 700;
            font-size: 0.9rem;
            box-shadow: 0 4px 15px rgba(37, 99, 235, 0.25);
            transition: all 0.3s ease;
          }
          .primary-action-btn:hover {
            transform: translateY(-3px);
            background: #1d4ed8;
            box-shadow: 0 8px 22px rgba(37, 99, 235, 0.35);
          }

          .secondary-action-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 0.65rem 1.25rem;
            background: #ffffff;
            color: #0f172a;
            border: 1px solid #cbd5e1;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 700;
            font-size: 0.9rem;
            box-shadow: 0 2px 5px rgba(0,0,0,0.02);
            transition: all 0.3s ease;
          }
          .secondary-action-btn:hover {
            transform: translateY(-3px);
            border-color: #2563eb;
            color: #2563eb;
            box-shadow: 0 6px 15px rgba(37, 99, 235, 0.15);
          }

          .liquid-glass-card {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 0.6rem 1.1rem;
            background: rgba(255, 255, 255, 0.65);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.8);
            border-radius: 12px;
            text-decoration: none;
            color: #0f172a;
            font-weight: 600;
            font-size: 0.9rem;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .liquid-glass-card:hover {
            transform: translateY(-4px) scale(1.03);
            background: rgba(255, 255, 255, 0.9);
            border-color: #2563eb;
            box-shadow: 0 12px 30px rgba(37, 99, 235, 0.2);
            color: #2563eb;
          }
          .liquid-glass-card:active {
            transform: translateY(-1px) scale(0.98);
          }

          .hero-desktop-layout {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 3rem;
            width: 100%;
            max-width: 1000px;
          }
          .hero-mobile-layout {
            display: none;
          }

          @media (max-width: 768px) {
            .hero-desktop-layout {
              display: none !important;
            }
            .hero-mobile-layout {
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
              text-align: center !important;
              gap: 1.2rem !important;
              width: 100% !important;
            }
            .hero-section {
              padding: 2rem 1rem 1.5rem 1rem !important;
              min-height: auto !important;
              height: auto !important;
            }
            .social-links-container, .hero-action-buttons {
              justify-content: center !important;
            }
          }
        `}
      </style>

      <section id="home" style={{ 
        position: 'relative', 
        width: '100%', 
        height: 'auto',
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '3rem 1.5rem 2rem 1.5rem',
        boxSizing: 'border-box',
        overflow: 'hidden',
        backgroundColor: '#f8fafc'
      }} className="hero-section">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero-desktop-layout" 
          style={{ zIndex: 2, marginBottom: '2.5rem' }}
        >
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: '1 1 450px', maxWidth: '550px' }}>
            <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: '900', color: '#2563eb', margin: '0 0 1rem 0', letterSpacing: '-0.03em', lineHeight: '1.05' }}>
              Nikhil Gupta
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.6', margin: 0, fontWeight: '500' }}>
              I am a BCA first-year student and aspiring software engineer passionate about building strong fundamentals in computer science, solving problems through code, and mastering Data Structures & Algorithms (DSA).
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
            <div className="photo-modern-shadow" style={{ width: '170px', height: '220px', borderRadius: '20px', overflow: 'hidden', border: '3px solid #ffffff', backgroundColor: '#e2e8f0' }}>
              <img src="/my-photo.png" alt="Nikhil Gupta" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero-mobile-layout" 
          style={{ zIndex: 2, marginBottom: '1.75rem' }}
        >
          
          <h1 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#2563eb', margin: 0, letterSpacing: '-0.03em', lineHeight: '1.1' }}>
            Nikhil Gupta
          </h1>

          <div className="photo-modern-shadow" style={{ width: '130px', height: '165px', borderRadius: '16px', overflow: 'hidden', border: '3px solid #ffffff', backgroundColor: '#e2e8f0', margin: '0.25rem 0' }}>
            <img src="/my-photo.png" alt="Nikhil Gupta" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: '1.5', margin: 0, fontWeight: '500', padding: '0 0.5rem' }}>
            I am a BCA first-year student and aspiring software engineer passionate about building strong fundamentals in computer science, solving problems through code, and mastering Data Structures & Algorithms (DSA).
          </p>

        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ 
            maxWidth: '1000px', 
            width: '100%', 
            display: 'flex', 
            gap: '1rem', 
            alignItems: 'center', 
            zIndex: 2, 
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }} 
          className="hero-action-buttons"
        >
          
          <a href="#projects" className="primary-action-btn">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            Explore Projects
          </a>

          <a href="#resume" className="secondary-action-btn">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            View Resume
          </a>

        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ 
            maxWidth: '1000px', 
            width: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-start', 
            gap: '0.85rem', 
            zIndex: 2,
            borderTop: '1px solid #cbd5e1',
            paddingTop: '1.5rem'
          }} 
          className="hero-text-content"
        >
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem', position: 'relative' }}>
            <h3 className="cursive-heading">
              Let's Connect & Explore
            </h3>
            <div style={{ width: '45px', height: '3px', background: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)', borderRadius: '2px', marginTop: '2px' }}></div>
          </div>

          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '0.65rem', 
            alignItems: 'center', 
            width: '100%',
            marginTop: '0.25rem'
          }} className="social-links-container">

            <a href="https://www.linkedin.com/in/nikhil-gupta-64697b3b6" target="_blank" rel="noopener noreferrer" className="liquid-glass-card">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#0a66c2"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
            </a>

            <a href="https://github.com/nikhildev161011-tech" target="_blank" rel="noopener noreferrer" className="liquid-glass-card">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#0f172a"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>

            <a href="mailto:nikhildev16161011@gmail.com" className="liquid-glass-card">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ea4335" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              Email
            </a>

            <a href="https://instagram.com/nikhildev161011" target="_blank" rel="noopener noreferrer" className="liquid-glass-card">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#e1306c"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Instagram
            </a>

            <a href="https://www.facebook.com/share/1EHFFeHiXY/" target="_blank" rel="noopener noreferrer" className="liquid-glass-card">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877f2"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              Facebook
            </a>

          </div>

        </motion.div>

      </section>
    </>
  );
}
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const nameString = "Nikhil Gupta";
  const letters = nameString.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&display=swap');

          .photo-badge-shadow {
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12), 0 0 15px rgba(37, 99, 235, 0.15);
          }

          .hero-main-title {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: clamp(2.5rem, 5vw, 4.5rem);
            font-weight: 900;
            color: #0f172a;
            margin: 0;
            letter-spacing: -0.04em;
            line-height: 1.05;
            display: flex;
            overflow: hidden;
          }

          .primary-action-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 0.6rem 1.15rem;
            background: #2563eb;
            color: #ffffff;
            border: 1px solid #2563eb;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 700;
            font-size: 0.85rem;
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
            justify-content: center;
            gap: 8px;
            padding: 0.6rem 1.15rem;
            background: #ffffff;
            color: #0f172a;
            border: 1px solid #cbd5e1;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 700;
            font-size: 0.85rem;
            box-shadow: 0 2px 5px rgba(0,0,0,0.02);
            transition: all 0.3s ease;
          }
          .secondary-action-btn:hover {
            transform: translateY(-3px);
            border-color: #2563eb;
            color: #2563eb;
            box-shadow: 0 6px 15px rgba(37, 99, 235, 0.15);
          }

          .hero-desktop-grid {
            display: grid;
            grid-template-columns: 220px 1fr;
            gap: 2.5rem;
            align-items: center;
            max-width: 950px;
            width: 100%;
          }

          .hero-action-buttons {
            display: flex;
            gap: 0.75rem;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 0.2rem;
          }

          @media (max-width: 850px) {
            .hero-desktop-grid {
              grid-template-columns: 1fr;
              justify-items: center;
              text-align: center;
            }
            .hero-text-content {
              align-items: center !important;
            }
            .hero-main-title {
              justify-content: center !important;
            }
            .hero-action-buttons {
              width: 100%;
              justify-content: center;
              flex-direction: row;
            }
            .hero-section-box {
              padding: 2.5rem 1rem !important;
            }
            .hero-avatar-box {
              width: 130px !important;
              height: 160px !important;
            }
          }
        `}
      </style>

      <section id="home" className="hero-section-box" style={{ 
        position: 'relative', 
        width: '100%', 
        minHeight: '75vh',
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '3rem 1.5rem',
        boxSizing: 'border-box',
        overflow: 'hidden',
        backgroundColor: '#f8fafc'
      }}>
        
        <div className="hero-desktop-grid">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}
          >
            <div className="photo-badge-shadow hero-avatar-box" style={{ width: '150px', height: '185px', borderRadius: '16px', overflow: 'hidden', border: '3px solid #ffffff', backgroundColor: '#e2e8f0', flexShrink: 0 }}>
              <img src="/my-photo.png" alt="Nikhil Gupta" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span style={{ fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.04em', color: '#64748b', textTransform: 'uppercase', textAlign: 'center' }}>
              CS Fundamentals & DSA • Software Engineering Aspirant
            </span>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem', width: '100%' }} className="hero-text-content">
            
            <motion.h1 
              className="hero-main-title"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {letters.map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={letterVariants}
                  style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              style={{ fontSize: '1rem', color: '#334155', lineHeight: '1.5', margin: 0, fontWeight: '500', maxWidth: '640px' }}
            >
              I am a BCA first-year student and aspiring software engineer passionate about building strong fundamentals in computer science, solving problems through code, and mastering Data Structures & Algorithms (DSA).
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
              className="hero-action-buttons"
            >
              <a href="#projects" className="primary-action-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                Explore Projects
              </a>

              <a href="#resume" className="secondary-action-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                View Resume
              </a>
            </motion.div>

          </div>

        </div>

      </section>
    </>
  );
}
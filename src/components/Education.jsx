import React from 'react';
import { motion } from 'framer-motion';
import { IoSchool } from 'react-icons/io5';

export default function Education() {
  const educationLetters = "Education".split("");

  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" }
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&display=swap');

          .education-seamless-section {
            width: 100%;
            padding: 2.5rem 1.5rem 4rem 1.5rem;
            background: transparent !important;
            border: none !important;
            border-top: none !important;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
          }

          .education-main-heading {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: clamp(2.2rem, 5.5vw, 3.8rem);
            font-weight: 900;
            color: #0f172a;
            line-height: 1.15;
            letter-spacing: -0.03em;
            display: flex;
            overflow: hidden;
            margin: 0;
            white-space: nowrap;
          }

          .edu-card {
            position: relative;
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(226, 232, 240, 0.85);
            border-radius: 24px;
            padding: 2.5rem;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.03);
            overflow: hidden;
            transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
          }
          .edu-card:hover {
            border-color: #2563eb;
            box-shadow: 0 18px 40px rgba(37, 99, 235, 0.1);
            transform: translateY(-2px);
          }

          .map-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 0.9rem;
            color: #2563eb;
            font-weight: 700;
            text-decoration: none;
            transition: color 0.2s ease;
          }
          .map-link:hover {
            color: #1d4ed8;
            text-decoration: underline;
          }

          @media (max-width: 768px) {
            .education-seamless-section {
              padding: 1.5rem 1rem 3rem 1rem !important;
            }
            .edu-card {
              padding: 1.5rem;
            }
            .education-main-heading {
              font-size: clamp(1.8rem, 5vw, 2.4rem);
            }
          }
        `}
      </style>

      <section id="education" className="education-seamless-section">
        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '3rem' 
        }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="edu-card"
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div 
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 'min(70vw, 450px)',
                height: 'min(70vw, 450px)',
                transform: 'translate(25%, -25%)',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 70% 30%, rgba(15, 23, 42, 0.35) 0%, rgba(15, 23, 42, 0.18) 28%, rgba(15, 23, 42, 0.06) 52%, transparent 75%)',
                filter: 'blur(52px)',
                pointerEvents: 'none',
                zIndex: 0
              }} 
            />

            <div 
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: 'min(65vw, 400px)',
                height: 'min(65vw, 400px)',
                transform: 'translate(-25%, 25%)',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 70%, rgba(15, 23, 42, 0.28) 0%, rgba(15, 23, 42, 0.14) 30%, transparent 70%)',
                filter: 'blur(56px)',
                pointerEvents: 'none',
                zIndex: 0
              }} 
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', position: 'relative' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '-0.02em', color: '#2563eb', textTransform: 'uppercase' }}>
                  Academic Background
                </span>

                <motion.h2 
                  className="education-main-heading"
                  variants={titleContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  {educationLetters.map((char, index) => (
                    <motion.span 
                      key={index} 
                      variants={letterVariants}
                      style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h2>

                <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)', borderRadius: '2px', marginTop: '4px' }}></div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.25rem 0' }}>
                      Bachelor of Computer Applications (BCA)
                    </h3>
                    <p style={{ fontSize: '1.05rem', color: '#2563eb', fontWeight: '700', margin: 0, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      <IoSchool size={20} color="#2563eb" /> Indira Gandhi National Open University (IGNOU)
                    </p>
                  </div>
                  <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#475569' }}>
                    2026 – Present
                  </span>
                </div>

                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.6', margin: 0, fontWeight: '500' }}>
                  Pursuing foundational computer science, core programming, and software engineering principles.
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(226, 232, 240, 0.8)', paddingTop: '1.25rem' }}>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Microtek+College+of+Management+and+Technology+Maldahiya+Varanasi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="map-link"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span>Study Centre: Microtek College of Management & Technology (View on Map)</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
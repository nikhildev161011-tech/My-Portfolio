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
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      }
    }
  };

  const photoVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.94, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 0.9, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      }
    }
  };

  const textFadeVariants = {
    hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.8, 
        delay: 0.35, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      }
    }
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5
      }
    }
  };

  const buttonPopVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&display=swap');

          .hero-seamless-container {
            position: relative;
            width: 100%;
            min-height: 75vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 4rem 1.5rem 3rem 1.5rem;
            box-sizing: border-box;
            overflow: hidden;
            background: transparent !important;
            border: none !important;
          }

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
            padding: 0.65rem 1.25rem;
            background: #2563eb;
            color: #ffffff;
            border: 1px solid #2563eb;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 700;
            font-size: 0.9rem;
            box-shadow: 0 4px 15px rgba(37, 99, 235, 0.25);
            transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
            white-space: nowrap;
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
            padding: 0.65rem 1.25rem;
            background: rgba(15, 23, 42, 0.08);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            color: #0f172a;
            border: 1px solid rgba(15, 23, 42, 0.16);
            border-radius: 12px;
            text-decoration: none;
            font-weight: 700;
            font-size: 0.9rem;
            box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
            transition: transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
            white-space: nowrap;
          }
          .secondary-action-btn:hover {
            transform: translateY(-3px);
            background: rgba(15, 23, 42, 0.14);
            border-color: rgba(15, 23, 42, 0.3);
            color: #0f172a;
            box-shadow: 0 6px 18px rgba(15, 23, 42, 0.12);
          }

          .hero-desktop-grid {
            display: grid;
            grid-template-columns: 220px 1fr;
            gap: 2.5rem;
            align-items: center;
            max-width: 950px;
            width: 100%;
            position: relative;
            z-index: 2;
          }

          .hero-action-buttons {
            display: flex;
            gap: 0.85rem;
            align-items: center;
            flex-wrap: nowrap;
            margin-top: 0.25rem;
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
              max-width: 380px;
              justify-content: center;
              flex-direction: row;
              flex-wrap: nowrap;
              gap: 0.65rem;
            }
            .primary-action-btn,
            .secondary-action-btn {
              flex: 1;
              padding: 0.65rem 0.85rem;
              font-size: 0.82rem;
              gap: 6px;
            }
            .primary-action-btn svg,
            .secondary-action-btn svg {
              width: 15px;
              height: 15px;
              flex-shrink: 0;
            }
            .hero-seamless-container {
              padding: 2.5rem 1rem !important;
            }
            .hero-avatar-box {
              width: 140px !important;
              height: 175px !important;
            }
          }
        `}
      </style>

      <section id="home" className="hero-seamless-container">
        <motion.div 
          animate={{
            x: [0, 20, -15, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.05, 0.96, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 'min(90vw, 750px)',
            height: 'min(90vw, 750px)',
            transform: 'translate(25%, -25%)',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 70% 30%, rgba(15, 23, 42, 0.38) 0%, rgba(15, 23, 42, 0.22) 25%, rgba(15, 23, 42, 0.08) 50%, transparent 80%)',
            filter: 'blur(58px)',
            pointerEvents: 'none',
            zIndex: 1
          }} 
        />

        <motion.div 
          animate={{
            x: [0, -20, 15, 0],
            y: [0, 20, -20, 0],
            scale: [1, 0.95, 1.06, 1]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 'min(80vw, 650px)',
            height: 'min(80vw, 650px)',
            transform: 'translate(-25%, 25%)',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 70%, rgba(15, 23, 42, 0.28) 0%, rgba(15, 23, 42, 0.16) 28%, transparent 75%)',
            filter: 'blur(62px)',
            pointerEvents: 'none',
            zIndex: 1
          }} 
        />

        <div className="hero-desktop-grid">
          
          <motion.div 
            variants={photoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem' }}
          >
            <div 
              className="photo-badge-shadow hero-avatar-box" 
              style={{ 
                width: '160px', 
                height: '195px', 
                borderRadius: '18px', 
                overflow: 'hidden', 
                border: '3px solid #ffffff', 
                backgroundColor: '#e2e8f0', 
                flexShrink: 0 
              }}
            >
              <img 
                src="/my-photo.png" 
                alt="Nikhil Gupta" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
              />
            </div>
            <span style={{ fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.04em', color: '#64748b', textTransform: 'uppercase', textAlign: 'center' }}>
              CS Fundamentals & DSA • Software Engineering Aspirant
            </span>
          </motion.div>

          <div 
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.15rem', width: '100%' }} 
            className="hero-text-content"
          >
            <motion.h1 
              className="hero-main-title"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
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
              variants={textFadeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              style={{ fontSize: '1.05rem', color: '#334155', lineHeight: '1.6', margin: 0, fontWeight: '500', maxWidth: '640px' }}
            >
              I am a BCA first-year student and aspiring software engineer passionate about building strong fundamentals in computer science, solving problems through code, and mastering Data Structures & Algorithms (DSA).
            </motion.p>

            <motion.div 
              variants={buttonContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="hero-action-buttons"
            >
              <motion.a 
                href="#projects" 
                variants={buttonPopVariants}
                className="primary-action-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                Explore Projects
              </motion.a>

              <motion.a 
                href="#resume" 
                variants={buttonPopVariants}
                className="secondary-action-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                View Resume
              </motion.a>
            </motion.div>

          </div>

        </div>
      </section>
    </>
  );
}
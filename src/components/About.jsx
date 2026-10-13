import React from 'react';
import { motion } from 'framer-motion';
import { SiCplusplus, SiMongodb } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';

export default function About() {
  const aboutLetters = "About Me".split("");
  const cricketLetters = "Cricket & Mindset".split("");

  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const iconsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  };

  const iconBounceVariant = {
    hidden: { 
      opacity: 0, 
      y: -30, 
      scale: 0.4,
      rotate: -10 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 15,
        mass: 0.8
      }
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&display=swap');

          .about-main-heading {
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

          .about-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 20px;
            padding: 2.5rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
          }
          .about-card:hover {
            border-color: #2563eb;
            box-shadow: 0 15px 35px rgba(37, 99, 235, 0.1);
          }

          .tech-icon-wrapper {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 11px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            cursor: pointer;
            transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
          }
          .tech-icon-wrapper:hover {
            transform: translateY(-4px) scale(1.05);
            border-color: #2563eb;
            background: #eff6ff;
            box-shadow: 0 6px 15px rgba(37, 99, 235, 0.15);
          }

          .dsa-stylish-card {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 10px 16px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            cursor: pointer;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
            transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
          }
          .dsa-stylish-card:hover {
            transform: translateY(-4px) scale(1.05);
            border-color: #2563eb;
            background: #eff6ff;
          }

          .dsa-text-black {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 1.05rem;
            font-weight: 900;
            color: #0f172a;
            letter-spacing: 0.04em;
            line-height: 1;
            display: inline-block;
          }

          .google-g { color: #4285F4; }
          .google-o1 { color: #EA4335; }
          .google-o2 { color: #FBBC05; }
          .google-g2 { color: #4285F4; }
          .google-l { color: #34A853; }
          .google-e { color: #EA4335; }

          @media (max-width: 768px) {
            .about-section {
              padding: 3rem 1rem !important;
            }
            .about-card {
              padding: 1.5rem;
            }
            .about-main-heading {
              font-size: clamp(1.8rem, 5vw, 2.4rem);
            }
          }
        `}
      </style>

      <section id="about" className="about-section" style={{ 
        width: '100%', 
        padding: '5rem 1.5rem', 
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        boxSizing: 'border-box'
      }}>
        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '3rem' 
        }}>
          
          <div className="about-card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', position: 'relative' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '-0.02em', color: '#2563eb', textTransform: 'uppercase' }}>
                  Introduction
                </span>

                <motion.h2 
                  className="about-main-heading"
                  variants={titleContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {aboutLetters.map((char, index) => (
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

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '2.5rem', 
                alignItems: 'center' 
              }}>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.7', margin: 0, fontWeight: '500' }}>
                    Currently learning foundational computer science and preparing to crack top-tier tech companies like <span style={{ fontWeight: '800' }}><span className="google-g">G</span><span className="google-o1">o</span><span className="google-o2">o</span><span className="google-g2">g</span><span className="google-l">l</span><span className="google-e">e</span></span>. I focus on core problem-solving while actively shipping useful full-stack web applications.
                  </p>
                  <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    I build full-stack web applications as Progressive Web Apps (PWA), handling both responsive frontend interfaces and robust backend logic.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <h4 style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Learning Path</h4>
                    <motion.div 
                      variants={iconsContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '0.25rem' }}
                    >
                      <motion.div variants={iconBounceVariant} className="dsa-stylish-card">
                        <span className="dsa-text-black">DSA</span>
                      </motion.div>
                      <motion.div variants={iconBounceVariant} className="tech-icon-wrapper" title="C++">
                        <SiCplusplus size={26} color="#00599C" />
                      </motion.div>
                    </motion.div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <h4 style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tech Stack</h4>
                    <motion.div 
                      variants={iconsContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginTop: '0.25rem' }}
                    >
                      <motion.div variants={iconBounceVariant} className="tech-icon-wrapper" title="HTML">
                        <FaHtml5 size={26} color="#E34F26" />
                      </motion.div>
                      <motion.div variants={iconBounceVariant} className="tech-icon-wrapper" title="CSS">
                        <FaCss3Alt size={26} color="#1572B6" />
                      </motion.div>
                      <motion.div variants={iconBounceVariant} className="tech-icon-wrapper" title="React">
                        <FaReact size={26} color="#61DAFB" />
                      </motion.div>
                      <motion.div variants={iconBounceVariant} className="tech-icon-wrapper" title="Node.js">
                        <FaNodeJs size={26} color="#339933" />
                      </motion.div>
                      <motion.div variants={iconBounceVariant} className="tech-icon-wrapper" title="MongoDB Atlas">
                        <SiMongodb size={26} color="#47A248" />
                      </motion.div>
                    </motion.div>
                  </div>

                </div>

              </div>

            </div>
          </div>

          <div className="about-card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', position: 'relative' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '-0.02em', color: '#2563eb', textTransform: 'uppercase' }}>
                  Beyond The Screen
                </span>
                
                <motion.h2 
                  className="about-main-heading"
                  variants={titleContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {cricketLetters.map((char, index) => (
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

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.7', margin: 0, fontWeight: '500' }}>
                  Growing up, my absolute ultimate dream was to become a professional cricketer. I never initially planned to enter the tech space; cricket was my core passion and first love. However, life steered me toward building software, creating web apps, and solving complex problems through code.
                </p>
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.7', margin: 0 }}>
                  While cricket remains an integral part of who I am and my lifelong passion, software engineering has become my core profession. The discipline, resilience under pressure, and team spirit I learned on the cricket field directly shape my programming mindset today—helping me write clean code, handle high-stakes debugging, and build robust digital experiences.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
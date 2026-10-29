import React from 'react';
import { motion } from 'framer-motion';
import { SiCplusplus, SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiGit } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

export default function About() {
  const ultraSmoothEase = [0.16, 1, 0.3, 1];

  const cardEntranceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: ultraSmoothEase
      }
    }
  };

  const headerEntranceVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: ultraSmoothEase
      }
    }
  };

  const arrowLineVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 0.85,
        delay: 0.25,
        ease: ultraSmoothEase
      }
    }
  };

  const arrowHeadVariants = {
    hidden: { opacity: 0, scale: 0.2, x: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.35,
        delay: 0.85,
        ease: ultraSmoothEase
      }
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

          .about-amoled-section {
            width: 100%;
            padding: 3rem 1.5rem 5rem 1.5rem;
            background-color: #000000;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
            overflow: hidden;
          }

          .about-amoled-card {
            position: relative;
            background: rgba(10, 10, 12, 0.65);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 24px;
            padding: 2.75rem;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.85);
            overflow: hidden;
            box-sizing: border-box;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
            transform: translateZ(0);
          }

          .about-amoled-card:hover {
            border-color: rgba(255, 103, 31, 0.35);
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(255, 103, 31, 0.08);
          }

          .about-luxury-heading {
            font-family: 'Syne', sans-serif;
            font-size: clamp(2.1rem, 5vw, 3.8rem);
            font-weight: 800;
            line-height: 1.15;
            letter-spacing: -0.04em;
            margin: 0;
            display: inline-block;
            background: linear-gradient(180deg, #ffffff 20%, #cbd5e1 60%, #1e293b 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 10px 30px rgba(255, 255, 255, 0.04);
            white-space: normal;
            word-break: normal;
            overflow-wrap: break-word;
          }

          .arrow-track-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            width: 100%;
            max-width: 320px;
            height: 16px;
            margin-top: 6px;
          }

          .arrow-line-body {
            height: 2px;
            background: linear-gradient(90deg, #ff671f 0%, #ff8533 100%);
            box-shadow: 0 0 10px rgba(255, 103, 31, 0.6);
            border-radius: 2px;
          }

          .arrow-head-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: -2px;
            color: #ff671f;
            filter: drop-shadow(0 0 6px rgba(255, 103, 31, 0.7));
          }

          .tech-icon-wrapper {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            background: rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
            transform: translateZ(0);
          }

          .dsa-liquid-card {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 9px 16px;
            background: rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
            transform: translateZ(0);
          }

          .dsa-text-blue {
            font-family: 'Syne', sans-serif;
            font-size: 0.92rem;
            font-weight: 800;
            color: #38bdf8;
            letter-spacing: 0.04em;
            line-height: 1;
            display: inline-block;
          }

          .about-narrative-lead {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 1.05rem;
            color: #e2e8f0;
            line-height: 1.75;
            margin: 0;
            font-weight: 500;
          }

          .about-narrative-sub {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 0.98rem;
            color: #94a3b8;
            line-height: 1.75;
            margin: 0;
            font-weight: 400;
          }

          @media (max-width: 768px) {
            .about-amoled-section {
              padding: 2rem 1rem 3.5rem 1rem !important;
            }
            .about-amoled-card {
              padding: 1.85rem 1.25rem;
              border-radius: 20px;
            }
            .about-luxury-heading {
              font-size: clamp(1.8rem, 7.5vw, 2.5rem);
            }
            .arrow-track-wrapper {
              max-width: 240px;
            }
          }
        `}
      </style>

      <section id="about" className="about-amoled-section">
        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2.5rem' 
        }}>
          
          <motion.div 
            className="about-amoled-card"
            variants={cardEntranceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div 
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 'min(70vw, 480px)',
                height: 'min(70vw, 480px)',
                transform: 'translate(25%, -25%)',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 70% 30%, rgba(255, 103, 31, 0.12) 0%, rgba(255, 103, 31, 0.04) 35%, transparent 70%)',
                filter: 'blur(70px)',
                pointerEvents: 'none',
                zIndex: 0
              }} 
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', zIndex: 1 }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', position: 'relative' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.06em', color: '#ff671f', textTransform: 'uppercase' }}>
                  Introduction
                </span>

                <motion.h2 
                  className="about-luxury-heading"
                  variants={headerEntranceVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  About Me
                </motion.h2>

                <div className="arrow-track-wrapper">
                  <motion.div 
                    className="arrow-line-body"
                    variants={arrowLineVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                  />
                  <motion.div 
                    className="arrow-head-icon"
                    variants={arrowHeadVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </motion.div>
                </div>
              </div>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', 
                gap: '2.5rem', 
                alignItems: 'start' 
              }}>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <p className="about-narrative-lead">
                    I am an aspiring Software Development Engineer building solid fundamentals in Data Structures & Algorithms, Object-Oriented Programming, and Computer Science fundamentals while shipping production-grade full-stack applications.
                  </p>
                  
                  <p className="about-narrative-sub">
                    My engineering workflow centers around modular React architecture, performant Node.js/Express REST APIs, scalable MongoDB schema design, and responsive PWAs built for low-latency user experiences.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <h4 style={{ margin: 0, fontSize: '0.8rem', color: '#ff671f', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Learning Path
                    </h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      <div className="dsa-liquid-card">
                        <span className="dsa-text-blue">DSA</span>
                      </div>
                      <div className="tech-icon-wrapper" title="C++">
                        <SiCplusplus size={23} color="#00599C" />
                      </div>
                      <div className="tech-icon-wrapper" title="JavaScript">
                        <SiJavascript size={21} color="#F7DF1E" />
                      </div>
                      <div className="tech-icon-wrapper" title="Git & GitHub">
                        <SiGit size={21} color="#F05032" />
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <h4 style={{ margin: 0, fontSize: '0.8rem', color: '#ff671f', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Skills Acquired
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                      <div className="tech-icon-wrapper" title="React.js">
                        <FaReact size={22} color="#61DAFB" />
                      </div>
                      <div className="tech-icon-wrapper" title="Node.js">
                        <FaNodeJs size={22} color="#339933" />
                      </div>
                      <div className="tech-icon-wrapper" title="Express.js">
                        <SiExpress size={22} color="#ffffff" />
                      </div>
                      <div className="tech-icon-wrapper" title="MongoDB Atlas">
                        <SiMongodb size={22} color="#47A248" />
                      </div>
                      <div className="tech-icon-wrapper" title="Tailwind CSS">
                        <SiTailwindcss size={22} color="#06B6D4" />
                      </div>
                      <div className="tech-icon-wrapper" title="VS Code">
                        <VscVscode size={22} color="#007ACC" />
                      </div>
                      <div className="tech-icon-wrapper" title="HTML5">
                        <FaHtml5 size={22} color="#E34F26" />
                      </div>
                      <div className="tech-icon-wrapper" title="CSS3">
                        <FaCss3Alt size={22} color="#1572B6" />
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </motion.div>

          <motion.div 
            className="about-amoled-card"
            variants={cardEntranceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div 
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: 'min(65vw, 420px)',
                height: 'min(65vw, 420px)',
                transform: 'translate(-25%, 25%)',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 70%, rgba(255, 103, 31, 0.1) 0%, rgba(255, 103, 31, 0.03) 30%, transparent 70%)',
                filter: 'blur(70px)',
                pointerEvents: 'none',
                zIndex: 0
              }} 
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', position: 'relative' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.06em', color: '#ff671f', textTransform: 'uppercase' }}>
                  Behind The Scenes
                </span>
                
                <motion.h2 
                  className="about-luxury-heading"
                  variants={headerEntranceVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  Cricket & Mindset
                </motion.h2>

                <div className="arrow-track-wrapper" style={{ maxWidth: '340px' }}>
                  <motion.div 
                    className="arrow-line-body"
                    variants={arrowLineVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                  />
                  <motion.div 
                    className="arrow-head-icon"
                    variants={arrowHeadVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </motion.div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p className="about-narrative-lead">
                  Growing up, my absolute dream was to play competitive cricket. While cricket remains my lifelong sport and natural instinct, software engineering became my true intellectual craft and career pursuit.
                </p>
                <p className="about-narrative-sub">
                  The mental discipline of match situations—staying composed under scoreboard pressure, evaluating risk, and executing consistently ball after ball—translates directly to breaking down complex algorithm problems, handling production debugging, and writing resilient code.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}

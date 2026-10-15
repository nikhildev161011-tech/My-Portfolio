import React from 'react';
import { motion } from 'framer-motion';
import { SiCplusplus, SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiGit, SiFirebase } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaCode } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

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
        staggerChildren: 0.06,
        delayChildren: 0.12
      }
    }
  };

  const iconBounceVariant = {
    hidden: { 
      opacity: 0, 
      y: -25, 
      scale: 0.5,
      rotate: -8 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 320,
        damping: 16,
        mass: 0.8
      }
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&display=swap');

          .about-seamless-section {
            width: 100%;
            padding: 1.5rem 1.5rem 5rem 1.5rem;
            background: transparent !important;
            border: none !important;
            border-top: none !important;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
          }

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
            position: relative;
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(226, 232, 240, 0.8);
            border-radius: 24px;
            padding: 2.5rem;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.03);
            overflow: hidden;
            transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
          }
          .about-card:hover {
            border-color: #2563eb;
            box-shadow: 0 18px 40px rgba(37, 99, 235, 0.1);
            transform: translateY(-2px);
          }

          .tech-icon-wrapper {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            cursor: pointer;
            transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
          }
          .tech-icon-wrapper:hover {
            transform: translateY(-3px) scale(1.06);
            border-color: #2563eb;
            background: #eff6ff;
            box-shadow: 0 6px 16px rgba(37, 99, 235, 0.16);
          }

          .dsa-stylish-card {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 8px 14px;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
            transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
          }
          .dsa-stylish-card:hover {
            transform: translateY(-3px) scale(1.05);
            border-color: #2563eb;
            background: #eff6ff;
          }

          .dsa-text-black {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 0.95rem;
            font-weight: 900;
            color: #0f172a;
            letter-spacing: 0.04em;
            line-height: 1;
            display: inline-block;
          }

          @media (max-width: 768px) {
            .about-seamless-section {
              padding: 1rem 1rem 3rem 1rem !important;
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

      <section id="about" className="about-seamless-section">
        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2.5rem' 
        }}>
          
          <div className="about-card">
            <div 
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 'min(70vw, 480px)',
                height: 'min(70vw, 480px)',
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
                width: 'min(65vw, 420px)',
                height: 'min(65vw, 420px)',
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
                  Introduction
                </span>

                <motion.h2 
                  className="about-main-heading"
                  variants={titleContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.25 }}
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
                gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', 
                gap: '2.5rem', 
                alignItems: 'start' 
              }}>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: '1.7', margin: 0, fontWeight: '500' }}>
                    I am an aspiring Software Development Engineer building solid fundamentals in Data Structures & Algorithms, Object-Oriented Programming, and Computer Science fundamentals while shipping production-grade full-stack applications.
                  </p>
                  
                  <p style={{ fontSize: '0.98rem', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    My engineering workflow centers around modular React architecture, performant Node.js/Express REST APIs, scalable MongoDB schema design, and responsive PWAs built for low-latency user experiences.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <h4 style={{ margin: 0, fontSize: '0.8rem', color: '#64748b', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Learning Path
                    </h4>
                    <motion.div 
                      variants={iconsContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.25 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginTop: '0.2rem' }}
                    >
                      <motion.div variants={iconBounceVariant} className="dsa-stylish-card">
                        <span className="dsa-text-black">DSA</span>
                      </motion.div>
                      <motion.div variants={iconBounceVariant} className="tech-icon-wrapper" title="C++">
                        <SiCplusplus size={24} color="#00599C" />
                      </motion.div>
                      <motion.div variants={iconBounceVariant} className="tech-icon-wrapper" title="JavaScript">
                        <SiJavascript size={22} color="#F7DF1E" />
                      </motion.div>
                      <motion.div variants={iconBounceVariant} className="tech-icon-wrapper" title="Git & GitHub">
                        <SiGit size={22} color="#F05032" />
                      </motion.div>
                    </motion.div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <h4 style={{ margin: 0, fontSize: '0.8rem', color: '#64748b', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Skills Acquired
                    </h4>
                    <motion.div 
                      variants={iconsContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.25 }}
                      style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', marginTop: '0.2rem' }}
                    >
                      <motion.div variants={iconBounceVariant} className="tech-icon-wrapper" title="React.js">
                        <FaReact size={23} color="#61DAFB" />
                      </motion.div>
                      <motion.div variants={iconBounceVariant} className="tech-icon-wrapper" title="Node.js">
                        <FaNodeJs size={23} color="#339933" />
                      </motion.div>
                      <motion.div variants={iconBounceVariant} className="tech-icon-wrapper" title="Express.js">
                        <SiExpress size={23} color="#0f172a" />
                      </motion.div>
                      <motion.div variants={iconBounceVariant} className="tech-icon-wrapper" title="MongoDB Atlas">
                        <SiMongodb size={23} color="#47A248" />
                      </motion.div>
                      <motion.div variants={iconBounceVariant} className="tech-icon-wrapper" title="Tailwind CSS">
                        <SiTailwindcss size={23} color="#06B6D4" />
                      </motion.div>
                      <motion.div variants={iconBounceVariant} className="tech-icon-wrapper" title="Firebase">
                        <SiFirebase size={23} color="#FFCA28" />
                      </motion.div>
                      <motion.div variants={iconBounceVariant} className="tech-icon-wrapper" title="VS Code">
                        <VscVscode size={23} color="#007ACC" />
                      </motion.div>
                      <motion.div variants={iconBounceVariant} className="tech-icon-wrapper" title="HTML5">
                        <FaHtml5 size={23} color="#E34F26" />
                      </motion.div>
                      <motion.div variants={iconBounceVariant} className="tech-icon-wrapper" title="CSS3">
                        <FaCss3Alt size={23} color="#1572B6" />
                      </motion.div>
                    </motion.div>
                  </div>

                </div>

              </div>

            </div>
          </div>

          <div className="about-card">
            <div 
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 'min(70vw, 480px)',
                height: 'min(70vw, 480px)',
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
                width: 'min(65vw, 420px)',
                height: 'min(65vw, 420px)',
                transform: 'translate(-25%, 25%)',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 70%, rgba(15, 23, 42, 0.28) 0%, rgba(15, 23, 42, 0.14) 30%, transparent 70%)',
                filter: 'blur(56px)',
                pointerEvents: 'none',
                zIndex: 0
              }} 
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', position: 'relative' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '-0.02em', color: '#2563eb', textTransform: 'uppercase' }}>
                  Beyond The Screen
                </span>
                
                <motion.h2 
                  className="about-main-heading"
                  variants={titleContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.25 }}
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
                <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: '1.7', margin: 0, fontWeight: '500' }}>
                  Growing up, my absolute dream was to play competitive cricket. While cricket remains my lifelong sport and natural instinct, software engineering became my true intellectual craft and career pursuit.
                </p>
                <p style={{ fontSize: '0.98rem', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                  The mental discipline of match situations—staying composed under scoreboard pressure, evaluating risk, and executing consistently ball after ball—translates directly to breaking down complex algorithm problems, handling production debugging, and writing resilient code.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { SiCplusplus, SiMongodb } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { BiCodeBlock } from 'react-icons/bi';

export default function About() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');

          .stylish-cursive {
            font-family: 'Caveat', cursive;
            font-size: 1.6rem;
            font-weight: 700;
            letter-spacing: 0.04em;
            color: #2563eb;
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }

          .bold-cursive-heading {
            font-family: 'Caveat', cursive;
            font-size: clamp(2.5rem, 6vw, 4rem);
            font-weight: 700;
            color: #0f172a;
            line-height: 1.1;
            letter-spacing: 0.02em;
          }

          .about-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 20px;
            padding: 2.5rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .about-card:hover {
            transform: translateY(-4px);
            border-color: #2563eb;
            box-shadow: 0 15px 35px rgba(37, 99, 235, 0.1);
          }

          .tech-icon-wrapper {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            transition: all 0.25s ease;
          }
          .tech-icon-wrapper:hover {
            transform: translateY(-3px);
            border-color: #2563eb;
            background: #eff6ff;
            box-shadow: 0 6px 15px rgba(37, 99, 235, 0.15);
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
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="about-card"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', position: 'relative' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '-0.02em', color: '#2563eb', textTransform: 'uppercase' }}>
                  Introduction
                </span>
                <h2 className="bold-cursive-heading" style={{ margin: 0 }}>
                  About Me
                </h2>
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginTop: '0.25rem' }}>
                      <span className="stylish-cursive">
                        <BiCodeBlock size={26} color="#2563eb" /> DSA
                      </span>
                      <span style={{ color: '#94a3b8', fontWeight: '600' }}>&bull;</span>
                      <div className="tech-icon-wrapper" title="C++">
                        <SiCplusplus size={28} color="#00599C" />
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <h4 style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tech Stack</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginTop: '0.25rem' }}>
                      <div className="tech-icon-wrapper" title="HTML">
                        <FaHtml5 size={28} color="#E34F26" />
                      </div>
                      <div className="tech-icon-wrapper" title="CSS">
                        <FaCss3Alt size={28} color="#1572B6" />
                      </div>
                      <div className="tech-icon-wrapper" title="React">
                        <FaReact size={28} color="#61DAFB" />
                      </div>
                      <div className="tech-icon-wrapper" title="Node.js">
                        <FaNodeJs size={28} color="#339933" />
                      </div>
                      <div className="tech-icon-wrapper" title="MongoDB Atlas">
                        <SiMongodb size={28} color="#47A248" />
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <h4 style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Featured Project Type</h4>
                    <p style={{ margin: 0, fontSize: '1.15rem', color: '#0f172a', fontWeight: '800' }}>Progressive Web Application</p>
                  </div>

                </div>

              </div>

            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="about-card"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', position: 'relative' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '-0.02em', color: '#2563eb', textTransform: 'uppercase' }}>
                  Beyond The Screen
                </span>
                <h2 className="bold-cursive-heading" style={{ margin: 0 }}>
                  Cricket & Mindset
                </h2>
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
          </motion.div>

        </div>
      </section>
    </>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';

export default function Projects() {
  const projectsList = [
    {
      title: "Money Tracker",
      description: "A secure and intuitive financial web application to track daily expenses, manage budgets, and monitor savings effortlessly.",
      tags: [
        { name: "React", icon: <FaReact size={20} color="#61DAFB" /> },
        { name: "Node.js", icon: <FaNodeJs size={20} color="#339933" /> },
        { name: "MongoDB Atlas", icon: <SiMongodb size={20} color="#47A248" /> },
        { name: "PWA", icon: <MdPhoneIphone size={20} color="#ff671f" /> }
      ],
      image: "/moneytracker.png",
      viewLink: "https://money-tracker-frontend-lilac.vercel.app/"
    },
  ];

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
    hidden: { opacity: 0, y: 35 },
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

  const phoneScrollVariants = {
    hidden: { 
      opacity: 0, 
      y: 35, 
      scale: 0.94 
    },
    visible: {
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.75,
        ease: ultraSmoothEase
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
        duration: 0.55,
        ease: ultraSmoothEase
      }
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@600;700&display=swap');

          .projects-amoled-section {
            width: 100%;
            padding: 3.5rem 1.5rem 5rem 1.5rem;
            background-color: #000000;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
            overflow: hidden;
          }

          .projects-amoled-card {
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

          .projects-amoled-card:hover {
            border-color: rgba(255, 103, 31, 0.35);
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(255, 103, 31, 0.08);
          }

          .projects-luxury-heading {
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
            max-width: 260px;
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

          .project-subcard {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          }

          .project-subcard:hover {
            transform: translateY(-4px);
            border-color: rgba(255, 103, 31, 0.4);
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.8), 0 0 25px rgba(255, 103, 31, 0.1);
          }

          .mobile-standalone-stage {
            width: 100%;
            background: transparent;
            padding: 2rem 1rem 1rem 1rem;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .iphone-chassis {
            width: 300px;
            height: 600px;
            background: #18181b;
            border-radius: 50px;
            padding: 10px;
            box-shadow: 
              0 0 0 1.5px #3f3f46,
              0 0 0 3px #18181b,
              0 25px 60px rgba(0, 0, 0, 0.95),
              0 0 30px rgba(255, 103, 31, 0.12);
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            position: relative;
            transition: transform 0.35s ease, box-shadow 0.35s ease;
          }

          .project-subcard:hover .iphone-chassis {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 
              0 0 0 1.5px rgba(255, 103, 31, 0.6),
              0 0 0 3px #18181b,
              0 30px 70px rgba(0, 0, 0, 0.98),
              0 0 35px rgba(255, 103, 31, 0.25);
          }

          .iphone-side-button-silent {
            position: absolute;
            left: -4px;
            top: 100px;
            width: 3px;
            height: 24px;
            background: #3f3f46;
            border-radius: 2px 0 0 2px;
          }

          .iphone-side-button-vol-up {
            position: absolute;
            left: -4px;
            top: 145px;
            width: 3px;
            height: 48px;
            background: #3f3f46;
            border-radius: 2px 0 0 2px;
          }

          .iphone-side-button-vol-down {
            position: absolute;
            left: -4px;
            top: 205px;
            width: 3px;
            height: 48px;
            background: #3f3f46;
            border-radius: 2px 0 0 2px;
          }

          .iphone-side-button-power {
            position: absolute;
            right: -4px;
            top: 155px;
            width: 3px;
            height: 65px;
            background: #3f3f46;
            border-radius: 0 2px 2px 0;
          }

          .iphone-display-bezel {
            width: 100%;
            height: 100%;
            border-radius: 40px;
            overflow: hidden;
            background: #ffffff;
            position: relative;
            border: 2px solid #000000;
            display: flex;
            flex-direction: column;
          }

          .iphone-dynamic-island {
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 22px;
            background-color: #000000;
            border-radius: 20px;
            z-index: 20;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-right: 8px;
            box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.15);
          }

          .iphone-camera-lens {
            width: 8px;
            height: 8px;
            background: radial-gradient(circle at 35% 35%, #1e1b4b 0%, #030712 80%);
            border-radius: 50%;
            box-shadow: 0 0 2px rgba(255, 255, 255, 0.2);
          }

          .iphone-home-indicator {
            position: absolute;
            bottom: 7px;
            left: 50%;
            transform: translateX(-50%);
            width: 95px;
            height: 4px;
            background-color: rgba(0, 0, 0, 0.7);
            border-radius: 10px;
            z-index: 15;
          }

          .iphone-screen-viewport {
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #ffffff;
            position: relative;
            display: flex;
          }

          .iphone-screen-viewport img {
            width: 100%;
            height: 100%;
            object-fit: fill;
            display: block;
            transition: transform 0.4s ease;
          }

          .project-subcard:hover .iphone-screen-viewport img {
            transform: scale(1.015);
          }

          .project-saffron-title {
            font-family: 'Syne', sans-serif;
            font-size: 1.45rem;
            font-weight: 800;
            color: #ff671f;
            margin: 0;
            letter-spacing: -0.02em;
          }

          .project-narrative-text {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 0.98rem;
            color: #94a3b8;
            line-height: 1.68;
            margin: 0;
            font-weight: 500;
          }

          .project-tech-pill {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 9px;
            background: rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
            transform: translateZ(0);
          }

          .project-liquid-glass-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            width: 100%;
            padding: 0.78rem 1.6rem;
            background: rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            color: #e2e8f0;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 14px;
            text-decoration: none;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 700;
            font-size: 0.92rem;
            letter-spacing: 0.01em;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.15);
            transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
            white-space: nowrap;
            cursor: pointer;
            box-sizing: border-box;
          }

          .project-liquid-glass-btn:hover {
            transform: translateY(-2px);
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.25);
            color: #ffffff;
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.7);
          }

          @media (max-width: 768px) {
            .projects-amoled-section {
              padding: 2rem 1rem 3.5rem 1rem !important;
            }
            .projects-amoled-card {
              padding: 1.85rem 1.25rem;
              border-radius: 20px;
            }
            .projects-luxury-heading {
              font-size: clamp(1.85rem, 7.5vw, 2.5rem);
            }
            .arrow-track-wrapper {
              max-width: 220px;
            }
            .mobile-standalone-stage {
              padding: 1.5rem 0.25rem 0.75rem 0.25rem;
            }
            .iphone-chassis {
              width: 275px;
              height: 550px;
              border-radius: 46px;
              padding: 9px;
            }
            .iphone-display-bezel {
              border-radius: 38px;
            }
            .iphone-dynamic-island {
              width: 74px;
              height: 20px;
              top: 8px;
            }
            .iphone-camera-lens {
              width: 7px;
              height: 7px;
            }
            .project-saffron-title {
              font-size: 1.25rem;
            }
          }
        `}
      </style>

      <section id="projects" className="projects-amoled-section">
        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2.5rem' 
        }}>
          
          <motion.div 
            className="projects-amoled-card"
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
                width: 'min(70vw, 450px)',
                height: 'min(70vw, 450px)',
                transform: 'translate(25%, -25%)',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 70% 30%, rgba(255, 103, 31, 0.12) 0%, rgba(255, 103, 31, 0.04) 35%, transparent 70%)',
                filter: 'blur(70px)',
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
                background: 'radial-gradient(circle at 30% 70%, rgba(255, 103, 31, 0.1) 0%, rgba(255, 103, 31, 0.03) 30%, transparent 70%)',
                filter: 'blur(70px)',
                pointerEvents: 'none',
                zIndex: 0
              }} 
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative', zIndex: 1 }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', position: 'relative' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.06em', color: '#ff671f', textTransform: 'uppercase' }}>
                  Crafted Work & Web Applications
                </span>

                <motion.h2 
                  className="projects-luxury-heading"
                  variants={headerEntranceVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  Projects
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
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                gap: '2rem' 
              }}>
                {projectsList.map((project, index) => (
                  <div key={index} className="project-subcard">
                    <div className="mobile-standalone-stage">
                      <motion.div 
                        variants={phoneScrollVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        className="iphone-chassis"
                      >
                        <div className="iphone-side-button-silent"></div>
                        <div className="iphone-side-button-vol-up"></div>
                        <div className="iphone-side-button-vol-down"></div>
                        <div className="iphone-side-button-power"></div>

                        <div className="iphone-display-bezel">
                          <div className="iphone-dynamic-island">
                            <div className="iphone-camera-lens"></div>
                          </div>

                          <div className="iphone-screen-viewport">
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80";
                              }}
                            />
                          </div>

                          <div className="iphone-home-indicator"></div>
                        </div>
                      </motion.div>
                    </div>

                    <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1, justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        <h3 className="project-saffron-title">
                          {project.title}
                        </h3>
                        <p className="project-narrative-text">
                          {project.description}
                        </p>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px', alignItems: 'center' }}>
                          {project.tags.map((tag, tagIndex) => (
                            <div key={tagIndex} className="project-tech-pill" title={tag.name}>
                              {tag.icon}
                            </div>
                          ))}
                        </div>

                        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.25rem' }}>
                          <motion.a 
                            href={project.viewLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            variants={buttonPopVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            className="project-liquid-glass-btn"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            <span>View Live Demo</span>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}

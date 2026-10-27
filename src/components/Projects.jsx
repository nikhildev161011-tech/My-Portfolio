import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaServer } from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiMongodb } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';

export default function Projects() {
  const headingLetters = "Projects".split("");

  const projectsList = [
    {
      title: "Money Tracker",
      description: "A secure and intuitive financial web application to track daily expenses, manage budgets, and monitor savings effortlessly.",
      tags: [
        { name: "React", icon: <FaReact size={20} color="#61DAFB" /> },
        { name: "Node.js", icon: <FaNodeJs size={20} color="#339933" /> },
        { name: "MongoDB Atlas", icon: <SiMongodb size={20} color="#47A248" /> },
        { name: "PWA", icon: <MdPhoneIphone size={20} color="#2563eb" /> }
      ],
      image: "/moneytracker.png",
      viewLink: "https://money-tracker-frontend-lilac.vercel.app/"
    },
  ];

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
      transition: { duration: 0.45, ease: "easeOut" }
    }
  };

  const iconsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const iconBounceVariant = {
    hidden: { 
      opacity: 0, 
      y: -25, 
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

  const phoneScrollVariants = {
    hidden: { 
      opacity: 0, 
      y: 40, 
      scale: 0.94,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&display=swap');

          .projects-seamless-section {
            width: 100%;
            padding: 2.5rem 1.5rem 5rem 1.5rem;
            background: transparent !important;
            border: none !important;
            border-top: none !important;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
          }

          .projects-main-heading {
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

          .project-title-animated {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 1.35rem;
            font-weight: 800;
            color: #0f172a;
            margin: 0;
            display: flex;
            overflow: hidden;
            flex-wrap: wrap;
          }

          .projects-wrapper-card {
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
          .projects-wrapper-card:hover {
            border-color: #2563eb;
            box-shadow: 0 18px 40px rgba(37, 99, 235, 0.1);
            transform: translateY(-2px);
          }

          .project-card {
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(226, 232, 240, 0.85);
            border-radius: 20px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .project-card:hover {
            transform: translateY(-5px);
            border-color: #2563eb;
            box-shadow: 0 14px 30px rgba(37, 99, 235, 0.12);
          }

          .mobile-standalone-stage {
            width: 100%;
            background: transparent;
            padding: 2rem 1rem 0.5rem 1rem;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .phone-mockup-container {
            width: 100%;
            max-width: 250px;
            display: flex;
            justify-content: center;
            align-items: center;
            filter: drop-shadow(0 16px 28px rgba(15, 23, 42, 0.15));
            transition: transform 0.35s ease, filter 0.35s ease;
          }
          .project-card:hover .phone-mockup-container {
            transform: translateY(-6px) scale(1.02);
            filter: drop-shadow(0 22px 34px rgba(37, 99, 235, 0.22));
          }

          .phone-mockup-img {
            width: 100%;
            height: auto;
            max-height: 480px;
            object-fit: contain;
            display: block;
          }

          .project-icon-wrapper {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 8px;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
          }
          .project-icon-wrapper:hover {
            transform: translateY(-2px);
            border-color: #2563eb;
            background: #eff6ff;
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
          }

          .view-project-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            font-size: 0.9rem;
            font-weight: 700;
            color: #ffffff;
            background-color: #2563eb;
            padding: 0.65rem 1.25rem;
            border-radius: 12px;
            text-decoration: none;
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
            transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
            box-sizing: border-box;
          }
          .view-project-btn:hover {
            background-color: #1d4ed8;
            transform: translateY(-3px);
            box-shadow: 0 8px 22px rgba(37, 99, 235, 0.35);
          }

          @media (max-width: 768px) {
            .projects-seamless-section {
              padding: 1.5rem 1rem 3rem 1rem !important;
            }
            .projects-wrapper-card {
              padding: 1.5rem;
            }
            .projects-main-heading {
              font-size: clamp(1.8rem, 5vw, 2.4rem);
            }
            .mobile-standalone-stage {
              padding: 1.5rem 0.5rem 0.25rem 0.5rem;
            }
            .phone-mockup-container {
              max-width: 220px;
            }
          }
        `}
      </style>

      <section id="projects" className="projects-seamless-section">
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
            className="projects-wrapper-card"
            style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', position: 'relative' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '-0.02em', color: '#2563eb', textTransform: 'uppercase' }}>
                  Crafted Work & Web Applications
                </span>

                <motion.h2 
                  className="projects-main-heading"
                  variants={titleContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  {headingLetters.map((char, index) => (
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
                gap: '2rem' 
              }}>
                {projectsList.map((project, index) => {
                  const projectTitleLetters = project.title.split("");

                  return (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                      className="project-card"
                    >
                      <div className="mobile-standalone-stage">
                        <motion.div 
                          variants={phoneScrollVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.25 }}
                          className="phone-mockup-container"
                        >
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="phone-mockup-img"
                            onError={(e) => {
                              e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80";
                            }}
                          />
                        </motion.div>
                      </div>

                      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          <motion.h3 
                            className="project-title-animated"
                            variants={titleContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                          >
                            {projectTitleLetters.map((char, charIdx) => (
                              <motion.span 
                                key={charIdx} 
                                variants={letterVariants}
                                style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}
                              >
                                {char}
                              </motion.span>
                            ))}
                          </motion.h3>
                          <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.6', margin: 0, fontWeight: '500' }}>
                            {project.description}
                          </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                          <motion.div 
                            variants={iconsContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}
                          >
                            {project.tags.map((tag, tagIndex) => (
                              <motion.div 
                                key={tagIndex} 
                                variants={iconBounceVariant} 
                                className="project-icon-wrapper" 
                                title={tag.name}
                              >
                                {tag.icon}
                              </motion.div>
                            ))}
                          </motion.div>

                          <div style={{ borderTop: '1px solid rgba(226, 232, 240, 0.8)', paddingTop: '1rem' }}>
                            <motion.a 
                              href={project.viewLink} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              variants={buttonPopVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: false, amount: 0.2 }}
                              className="view-project-btn"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                              View Live Demo
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}

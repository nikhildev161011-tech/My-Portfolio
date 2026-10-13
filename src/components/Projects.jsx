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
    {
      title: "DevCart",
      description: "A modern e-commerce web platform built for developers, featuring seamless product browsing, cart management, and secure checkout simulation.",
      tags: [
        { name: "React", icon: <FaReact size={20} color="#61DAFB" /> },
        { name: "Express", icon: <SiExpress size={20} color="#0f172a" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={20} color="#06B6D4" /> },
        { name: "REST API", icon: <FaServer size={20} color="#2563eb" /> }
      ],
      image: "/devcart.png",
      viewLink: "https://ecommerce-frontend-ivory-rho.vercel.app/"
    },
    {
      title: "PCIMT",
      description: "An advanced institutional web portal designed for efficient academic management, student tracking, and resource sharing.",
      tags: [
        { name: "Full Stack", icon: <FaServer size={20} color="#2563eb" /> },
        { name: "Node.js", icon: <FaNodeJs size={20} color="#339933" /> },
        { name: "Express", icon: <SiExpress size={20} color="#0f172a" /> },
        { name: "MongoDB", icon: <SiMongodb size={20} color="#47A248" /> }
      ],
      image: "/pcimt.png.png",
      viewLink: "https://pcimt-frontend-qhhv.vercel.app/"
    }
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

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&display=swap');

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
            background: #ffffff;
            border: 1px solid #2563eb;
            border-radius: 20px;
            padding: 2.5rem;
            box-shadow: 0 10px 30px rgba(37, 99, 235, 0.08);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .projects-wrapper-card:hover {
            box-shadow: 0 15px 35px rgba(37, 99, 235, 0.15);
          }

          .project-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
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

          .browser-mockup-wrapper {
            width: 100%;
            background: #f8fafc;
            padding: 1.25rem 1.25rem 0 1.25rem;
            border-bottom: 1px solid #e2e8f0;
            box-sizing: border-box;
          }

          .browser-window {
            width: 100%;
            background: #ffffff;
            border-radius: 12px 12px 0 0;
            border: 1px solid #cbd5e1;
            border-bottom: none;
            box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: transform 0.35s ease;
          }
          .project-card:hover .browser-window {
            transform: translateY(-3px);
          }

          .browser-top-bar {
            height: 32px;
            background: #f1f5f9;
            border-bottom: 1px solid #e2e8f0;
            display: flex;
            align-items: center;
            padding: 0 12px;
            gap: 12px;
          }

          .browser-dots {
            display: flex;
            align-items: center;
            gap: 6px;
          }

          .browser-dot {
            width: 9px;
            height: 9px;
            border-radius: 50%;
          }
          .dot-red { background: #ef4444; }
          .dot-yellow { background: #f59e0b; }
          .dot-green { background: #10b981; }

          .browser-address-bar {
            flex: 1;
            height: 18px;
            background: #ffffff;
            border-radius: 6px;
            border: 1px solid #e2e8f0;
            display: flex;
            align-items: center;
            padding: 0 8px;
          }

          .browser-address-text {
            font-size: 0.65rem;
            color: #94a3b8;
            font-family: monospace;
          }

          .browser-screen-viewport {
            width: 100%;
            height: 200px;
            overflow: hidden;
            background: #ffffff;
            position: relative;
          }

          .browser-screen-viewport img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
            display: block;
            transition: transform 0.4s ease;
          }
          .project-card:hover .browser-screen-viewport img {
            transform: scale(1.03);
          }

          .project-icon-wrapper {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 8px;
            background: #f8fafc;
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
            padding: 10px 16px;
            border-radius: 12px;
            text-decoration: none;
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
            transition: all 0.2s ease;
          }
          .view-project-btn:hover {
            background-color: #1d4ed8;
            transform: translateY(-2px);
            box-shadow: 0 6px 18px rgba(37, 99, 235, 0.35);
          }

          @media (max-width: 768px) {
            .projects-section {
              padding: 3rem 1rem !important;
            }
            .projects-wrapper-card {
              padding: 1.5rem;
            }
            .projects-main-heading {
              font-size: clamp(1.8rem, 5vw, 2.4rem);
            }
            .browser-screen-viewport {
              height: 180px;
            }
          }
        `}
      </style>

      <section id="projects" className="projects-section" style={{ 
        width: '100%', 
        padding: '5rem 1.5rem', 
        backgroundColor: '#f8fafc',
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
            className="projects-wrapper-card"
            style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
          >
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
                    
                    <div className="browser-mockup-wrapper">
                      <div className="browser-window">
                        <div className="browser-top-bar">
                          <div className="browser-dots">
                            <span className="browser-dot dot-red"></span>
                            <span className="browser-dot dot-yellow"></span>
                            <span className="browser-dot dot-green"></span>
                          </div>
                          <div className="browser-address-bar">
                            <span className="browser-address-text">{project.title.toLowerCase().replace(/\s+/g, '')}.app</span>
                          </div>
                        </div>

                        <div className="browser-screen-viewport">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            onError={(e) => {
                              e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80";
                            }}
                          />
                        </div>
                      </div>
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

                        <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
                          <a href={project.viewLink} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            View Live Demo
                          </a>
                        </div>
                      </div>

                    </div>

                  </motion.div>
                );
              })}
            </div>

          </motion.div>

        </div>
      </section>
    </>
  );
}
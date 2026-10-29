import React from 'react';
import { motion } from 'framer-motion';
import { IoSchool } from 'react-icons/io5';

export default function Education() {
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

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

          .education-amoled-section {
            width: 100%;
            padding: 3.5rem 1.5rem 5rem 1.5rem;
            background-color: #000000;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
            overflow: hidden;
          }

          .education-amoled-card {
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

          .education-amoled-card:hover {
            border-color: rgba(255, 103, 31, 0.35);
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(255, 103, 31, 0.08);
          }

          .education-luxury-heading {
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

          .edu-degree-title {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 1.35rem;
            font-weight: 800;
            color: #ffffff;
            margin: 0 0 0.35rem 0;
            letter-spacing: -0.02em;
          }

          .edu-university-tag {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 1.05rem;
            color: #ff671f;
            font-weight: 700;
            margin: 0;
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }

          .edu-timeline-plain {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 0.95rem;
            font-weight: 700;
            color: #94a3b8;
            margin: 0;
            letter-spacing: 0.02em;
          }

          .edu-description-text {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 1rem;
            color: #94a3b8;
            line-height: 1.7;
            margin: 0;
            font-weight: 500;
          }

          .map-link {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 0.95rem;
            color: #e2e8f0;
            font-weight: 600;
            text-decoration: none;
            transition: color 0.25s ease, transform 0.25s ease;
          }

          .map-link svg {
            color: #ff671f;
            flex-shrink: 0;
            transition: transform 0.25s ease;
          }

          .map-link:hover {
            color: #ffffff;
            transform: translateX(3px);
          }

          .map-link:hover svg {
            transform: scale(1.15);
          }

          @media (max-width: 768px) {
            .education-amoled-section {
              padding: 2rem 1rem 3.5rem 1rem !important;
            }
            .education-amoled-card {
              padding: 1.85rem 1.25rem;
              border-radius: 20px;
            }
            .education-luxury-heading {
              font-size: clamp(1.85rem, 7.5vw, 2.5rem);
            }
            .arrow-track-wrapper {
              max-width: 220px;
            }
            .edu-degree-title {
              font-size: 1.15rem;
            }
            .edu-university-tag {
              font-size: 0.95rem;
            }
          }
        `}
      </style>

      <section id="education" className="education-amoled-section">
        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2.5rem' 
        }}>
          
          <motion.div 
            className="education-amoled-card"
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', zIndex: 1 }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', position: 'relative' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.06em', color: '#ff671f', textTransform: 'uppercase' }}>
                  Academic Background
                </span>

                <motion.h2 
                  className="education-luxury-heading"
                  variants={headerEntranceVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  Education
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

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 className="edu-degree-title">
                      Bachelor of Computer Applications (BCA)
                    </h3>
                    <p className="edu-university-tag">
                      <IoSchool size={20} color="#ff671f" /> Indira Gandhi National Open University (IGNOU)
                    </p>
                  </div>
                  <p className="edu-timeline-plain">
                    2026 – Present
                  </p>
                </div>

                <p className="edu-description-text">
                  Pursuing foundational computer science, core programming, and software engineering principles.
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.25rem' }}>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Microtek+College+of+Management+and+Technology+Maldahiya+Varanasi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="map-link"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Study Centre: Microtek College of Management & Technology</span>
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}

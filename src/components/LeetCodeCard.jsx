import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';

export default function LeetCodeCard() {
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
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

          .leetcode-amoled-section {
            width: 100%;
            padding: 3.5rem 1.5rem 5rem 1.5rem;
            background-color: #000000;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
            overflow: hidden;
          }

          .leetcode-amoled-card {
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

          .leetcode-amoled-card:hover {
            border-color: rgba(255, 103, 31, 0.35);
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(255, 103, 31, 0.08);
          }

          .leetcode-luxury-heading {
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

          .leetcode-subhead-row {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .leetcode-title-text {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 1.35rem;
            font-weight: 800;
            color: #ffffff;
            margin: 0;
            letter-spacing: -0.02em;
          }

          .leetcode-accent-tag {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 1.05rem;
            color: #ff671f;
            font-weight: 700;
            margin: 0;
          }

          .leetcode-narrative-lead {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 1rem;
            color: #94a3b8;
            line-height: 1.7;
            margin: 0;
            font-weight: 500;
          }

          .leetcode-liquid-glass-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
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
          }

          .leetcode-liquid-glass-btn:hover {
            transform: translateY(-2px);
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.25);
            color: #ffffff;
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.7);
          }

          @media (max-width: 768px) {
            .leetcode-amoled-section {
              padding: 2rem 1rem 3.5rem 1rem !important;
            }
            .leetcode-amoled-card {
              padding: 1.85rem 1.25rem;
              border-radius: 20px;
            }
            .leetcode-luxury-heading {
              font-size: clamp(1.75rem, 7vw, 2.4rem);
            }
            .arrow-track-wrapper {
              max-width: 240px;
            }
            .leetcode-title-text {
              font-size: 1.15rem;
            }
            .leetcode-accent-tag {
              font-size: 0.95rem;
            }
            .leetcode-liquid-glass-btn {
              width: 100%;
              padding: 0.75rem 1rem;
              font-size: 0.88rem;
            }
          }
        `}
      </style>

      <section id="leetcode" className="leetcode-amoled-section">
        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2.5rem' 
        }}>
          
          <motion.div 
            className="leetcode-amoled-card"
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
                  Problem Solving Journey
                </span>

                <motion.h2 
                  className="leetcode-luxury-heading"
                  variants={headerEntranceVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  LeetCode & DSA Practice
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
                <div className="leetcode-subhead-row">
                  <SiLeetcode size={28} color="#f59e0b" />
                  <h3 className="leetcode-title-text">
                    LeetCode Profile Active
                  </h3>
                </div>

                <p className="leetcode-accent-tag">
                  Targeting C++ & Data Structures Mastery
                </p>

                <p className="leetcode-narrative-lead">
                  Building a strong foundation in C++ and gearing up for regular algorithmic problem solving to crack top software engineering roles.
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.25rem' }}>
                <motion.a 
                  href="https://leetcode.com/u/nikhil161011/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variants={buttonPopVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  className="leetcode-liquid-glass-btn"
                >
                  <SiLeetcode size={18} color="#f59e0b" />
                  <span>View LeetCode Profile</span>
                </motion.a>
              </div>

            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';

export default function LeetCodeCard() {
  const headingLetters = "LeetCode & DSA Practice".split("");

  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
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

          .leetcode-seamless-section {
            width: 100%;
            padding: 2.5rem 1.5rem 4rem 1.5rem;
            background: transparent !important;
            border: none !important;
            border-top: none !important;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
          }

          .leetcode-main-heading {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: clamp(1.4rem, 3.8vw, 2.8rem);
            font-weight: 900;
            color: #0f172a;
            line-height: 1.2;
            letter-spacing: -0.02em;
            display: flex;
            overflow: hidden;
            margin: 0;
            white-space: nowrap;
          }

          .leetcode-card {
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
          .leetcode-card:hover {
            border-color: #2563eb;
            box-shadow: 0 18px 40px rgba(37, 99, 235, 0.1);
            transform: translateY(-2px);
          }

          .leetcode-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 0.9rem;
            font-weight: 700;
            color: #0f172a;
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid #cbd5e1;
            padding: 0.65rem 1.25rem;
            border-radius: 12px;
            text-decoration: none;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.02);
            transition: transform 0.3s ease, border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
          }
          .leetcode-btn:hover {
            transform: translateY(-3px);
            border-color: #2563eb;
            color: #2563eb;
            box-shadow: 0 6px 15px rgba(37, 99, 235, 0.15);
          }

          @media (max-width: 768px) {
            .leetcode-seamless-section {
              padding: 1.5rem 1rem 3rem 1rem !important;
            }
            .leetcode-card {
              padding: 1.5rem;
            }
            .leetcode-main-heading {
              font-size: clamp(1.15rem, 4.8vw, 1.6rem);
            }
          }
        `}
      </style>

      <section id="leetcode" className="leetcode-seamless-section">
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
            className="leetcode-card"
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', position: 'relative' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '-0.02em', color: '#2563eb', textTransform: 'uppercase' }}>
                  Problem Solving Journey
                </span>

                <motion.h2 
                  className="leetcode-main-heading"
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

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SiLeetcode size={28} color="#f59e0b" />
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>
                    LeetCode Profile Active
                  </h3>
                </div>

                <p style={{ fontSize: '1.05rem', color: '#2563eb', fontWeight: '700', margin: 0 }}>
                  Targeting C++ & Data Structures Mastery
                </p>

                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.6', margin: 0, fontWeight: '500' }}>
                  Building a strong foundation in C++ and gearing up for regular algorithmic problem solving to crack top software engineering roles.
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(226, 232, 240, 0.8)', paddingTop: '1.25rem' }}>
                <motion.a 
                  href="https://leetcode.com/u/nikhil161011/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variants={buttonPopVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  className="leetcode-btn"
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
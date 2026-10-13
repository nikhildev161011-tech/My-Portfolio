import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';

export default function LeetCodeCard() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');

          .bold-cursive-heading {
            font-family: 'Caveat', cursive;
            font-size: clamp(2.5rem, 6vw, 4rem);
            font-weight: 700;
            color: #0f172a;
            line-height: 1.1;
            letter-spacing: 0.02em;
          }

          .leetcode-card {
            background: #ffffff;
            border: 1px solid #2563eb;
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(37, 99, 235, 0.08);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .leetcode-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 15px 35px rgba(37, 99, 235, 0.15);
          }

          .leetcode-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 0.9rem;
            font-weight: 700;
            color: #2563eb;
            background-color: #ffffff;
            border: 1px solid #2563eb;
            padding: 10px 20px;
            border-radius: 12px;
            text-decoration: none;
            box-shadow: 0 2px 5px rgba(37, 99, 235, 0.05);
            transition: all 0.25s ease;
          }
          .leetcode-btn:hover {
            background-color: #eff6ff;
            color: #1d4ed8;
            transform: translateY(-2px);
            box-shadow: 0 6px 18px rgba(37, 99, 235, 0.2);
          }

          @media (max-width: 768px) {
            .leetcode-card {
              padding: 1.25rem;
            }
          }
        `}
      </style>

      <section id="leetcode" style={{ 
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
            className="leetcode-card"
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', position: 'relative' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '-0.02em', color: '#2563eb', textTransform: 'uppercase' }}>
                Problem Solving Journey
              </span>
              <h2 className="bold-cursive-heading" style={{ margin: 0 }}>
                LeetCode & DSA Practice
              </h2>
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

            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem' }}>
              <a 
                href="https://leetcode.com/u/nikhil161011/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="leetcode-btn"
              >
                <SiLeetcode size={18} color="#f59e0b" />
                <span>View LeetCode Profile</span>
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
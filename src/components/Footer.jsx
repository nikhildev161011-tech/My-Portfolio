import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHome, FaUser, FaCode, FaGraduationCap } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500&display=swap');

          .footer-cursive-heading {
            font-family: 'Caveat', cursive;
            font-size: clamp(2rem, 4vw, 2.8rem);
            font-weight: 500;
            color: #0f172a;
            line-height: 1.1;
            letter-spacing: 0.02em;
          }

          .footer-social-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 38px;
            height: 38px;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            color: #2563eb;
            transition: all 0.25s ease;
            text-decoration: none;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          }
          .footer-social-btn:hover {
            background-color: #2563eb;
            color: #ffffff;
            border-color: #2563eb;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
          }

          .footer-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: #475569;
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 600;
            transition: color 0.2s ease;
          }
          .footer-link:hover {
            color: #2563eb;
          }

          @media (max-width: 768px) {
            .footer-bottom-row {
              flex-direction: column;
              align-items: center;
              text-align: center;
              gap: 1rem;
            }
          }
        `}
      </style>

      <footer style={{ 
        width: '100%', 
        padding: '4rem 1.5rem 2.5rem 1.5rem', 
        backgroundColor: '#f8fafc',
        borderTop: '1px solid #e2e8f0',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{ 
          maxWidth: '1000px', 
          width: '100%', 
          margin: '0 auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2.5rem' 
        }}>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '1.5rem',
            borderBottom: '1px solid #e2e8f0',
            paddingBottom: '2rem'
          }}>
            <div>
              <h2 className="footer-cursive-heading" style={{ margin: 0 }}>
                Developer & Cricketer
              </h2>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <a href="https://github.com/nikhildev161011-tech" target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="GitHub">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/nikhil-gupta-64697b3b6" target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="LinkedIn">
                <FaLinkedin size={18} />
              </a>
              <a href="https://leetcode.com/u/nikhil161011/" target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="LeetCode">
                <SiLeetcode size={18} />
              </a>
              <a href="mailto:nikhildev16161011@gmail.com" className="footer-social-btn" title="Email">
                <FaEnvelope size={17} />
              </a>
            </div>
          </div>

          <div 
            className="footer-bottom-row"
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              width: '100%',
              gap: '1.5rem' 
            }}
          >
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#" className="footer-link">
                <FaHome size={15} color="#2563eb" /> Home
              </a>
              <a href="#about" className="footer-link">
                <FaUser size={14} color="#2563eb" /> About
              </a>
              <a href="#projects" className="footer-link">
                <FaCode size={15} color="#2563eb" /> Projects
              </a>
              <a href="#education" className="footer-link">
                <FaGraduationCap size={16} color="#2563eb" /> Education
              </a>
              <a href="#leetcode" className="footer-link">
                <SiLeetcode size={15} color="#f59e0b" /> LeetCode
              </a>
            </div>

            <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8', fontWeight: '600', textAlign: 'right' }}>
              &copy; 2026 Nikhil Gupta || All rights reserved
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}
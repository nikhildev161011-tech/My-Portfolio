import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaHome, FaUser, FaCode, FaGraduationCap } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
  const iconsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const iconBounceVariant = {
    hidden: { 
      opacity: 0, 
      y: -20, 
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

  const socialLinks = [
    {
      title: "GitHub",
      link: "https://github.com/nikhildev161011-tech",
      icon: <FaGithub size={22} color="#181717" />
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/nikhil-gupta-64697b3b6",
      icon: <FaLinkedin size={22} color="#0A66C2" />
    },
    {
      title: "LeetCode",
      link: "https://leetcode.com/u/nikhil161011/",
      icon: <SiLeetcode size={22} color="#FFA116" />
    },
    {
      title: "Instagram",
      link: "https://instagram.com/nikhildev161011",
      icon: <FaInstagram size={22} color="#E4405F" />
    },
    {
      title: "Email",
      link: "mailto:nikhil.dev161011@gmail.com",
      icon: <FiMail size={22} color="#EA4335" />
    }
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&display=swap');

          .footer-seamless-section {
            width: 100%;
            padding: 2.5rem 1.5rem 4rem 1.5rem;
            background: transparent !important;
            border: none !important;
            border-top: none !important;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            z-index: 2;
          }

          .footer-wrapper-card {
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
          .footer-wrapper-card:hover {
            border-color: #2563eb;
            box-shadow: 0 18px 40px rgba(37, 99, 235, 0.1);
            transform: translateY(-2px);
          }

          .footer-social-icon-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            text-decoration: none;
            cursor: pointer;
            transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          }
          .footer-social-icon-btn:hover {
            transform: translateY(-3px) scale(1.05);
            border-color: #2563eb;
            background: #eff6ff;
            box-shadow: 0 6px 15px rgba(37, 99, 235, 0.15);
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
            .footer-seamless-section {
              padding: 1.5rem 1rem 3rem 1rem !important;
            }
            .footer-wrapper-card {
              padding: 1.5rem;
            }
            .footer-bottom-row {
              flex-direction: column;
              align-items: center;
              text-align: center;
              gap: 1.25rem;
            }
          }
        `}
      </style>

      <footer className="footer-seamless-section">
        <div style={{ 
          maxWidth: '1000px', 
          width: '100%', 
          margin: '0 auto', 
          display: 'flex', 
          flexDirection: 'column' 
        }}>
          
          <div className="footer-wrapper-card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
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

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  width: '100%',
                  borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
                  paddingBottom: '2rem'
                }}
              >
                <motion.div 
                  variants={iconsContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}
                >
                  {socialLinks.map((item, index) => (
                    <motion.a 
                      key={index}
                      href={item.link} 
                      target={item.title === "Email" ? "_self" : "_blank"} 
                      rel="noopener noreferrer" 
                      variants={iconBounceVariant}
                      className="footer-social-icon-btn" 
                      title={item.title}
                    >
                      {item.icon}
                    </motion.a>
                  ))}
                </motion.div>
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
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                  <a href="#home" className="footer-link">
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
                    <SiLeetcode size={15} color="#FFA116" /> LeetCode
                  </a>
                </div>

                <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8', fontWeight: '600' }}>
                  &copy; 2026 || All rights reserved
                </p>
              </div>
            </div>

          </div>

        </div>
      </footer>
    </>
  );
}
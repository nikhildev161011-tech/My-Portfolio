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
      link: "mailto:nikhildev16161011@gmail.com",
      icon: <FiMail size={22} color="#EA4335" />
    }
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&display=swap');

          .footer-wrapper-card {
            background: #ffffff;
            border: 1px solid #2563eb;
            border-radius: 20px;
            padding: 2.5rem;
            box-shadow: 0 10px 30px rgba(37, 99, 235, 0.08);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .footer-wrapper-card:hover {
            box-shadow: 0 15px 35px rgba(37, 99, 235, 0.15);
          }

          .footer-social-icon-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            background: #ffffff;
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
            .footer-section {
              padding: 3rem 1rem !important;
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

      <footer className="footer-section" style={{ 
        width: '100%', 
        padding: '4rem 1.5rem 3rem 1.5rem', 
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
          flexDirection: 'column' 
        }}>
          
          <div className="footer-wrapper-card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div 
              style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                width: '100%',
                borderBottom: '1px solid #e2e8f0',
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
                  <SiLeetcode size={15} color="#FFA116" /> LeetCode
                </a>
              </div>

              <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8', fontWeight: '600' }}>
                &copy; 2026 || All rights reserved
              </p>
            </div>

          </div>

        </div>
      </footer>
    </>
  );
}
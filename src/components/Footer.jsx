import React from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

export default function Footer() {
  const ultraSmoothEase = [0.16, 1, 0.3, 1];

  const footerCardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: ultraSmoothEase
      }
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono:wght@600;700;800&display=swap');

          .footer-amoled-section {
            width: 100%;
            padding: 3rem 1.5rem 8rem 1.5rem;
            background-color: #000000;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            position: relative;
            z-index: 2;
            overflow: hidden;
          }

          .footer-amoled-card {
            position: relative;
            max-width: 1000px;
            width: 100%;
            background: rgba(10, 10, 12, 0.65);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 24px;
            padding: 2.75rem 2.5rem;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.85);
            overflow: hidden;
            box-sizing: border-box;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
            transform: translateZ(0);
          }

          .footer-amoled-card:hover {
            border-color: rgba(255, 103, 31, 0.35);
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(255, 103, 31, 0.08);
          }

          .footer-stack-center {
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 1.5rem;
          }

          /* Aesthetic Radar Status Pill without thick glass */
          .footer-radar-pill {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 6px 16px;
            background: #050505;
            border: 1px solid #1a1a1e;
            border-radius: 9999px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.8rem;
            font-weight: 700;
            color: #e2e8f0;
            letter-spacing: 0.02em;
          }

          /* Multi-ring pulsating radar core */
          .footer-radar-beacon {
            position: relative;
            width: 10px;
            height: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .footer-radar-core {
            width: 7px;
            height: 7px;
            background-color: #10b981;
            border-radius: 50%;
            box-shadow: 0 0 8px #10b981;
            position: relative;
            z-index: 2;
          }

          .footer-radar-wave {
            position: absolute;
            inset: -4px;
            border-radius: 50%;
            border: 1.5px solid rgba(16, 185, 129, 0.65);
            animation: radarPing 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
          }

          .footer-radar-wave-outer {
            position: absolute;
            inset: -8px;
            border-radius: 50%;
            border: 1px solid rgba(16, 185, 129, 0.3);
            animation: radarPing 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
            animation-delay: 0.8s;
          }

          @keyframes radarPing {
            0% {
              transform: scale(0.6);
              opacity: 1;
            }
            100% {
              transform: scale(2.2);
              opacity: 0;
            }
          }

          .footer-tech-stack-tagline {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.84rem;
            font-weight: 600;
            color: #94a3b8;
            margin: 0;
            letter-spacing: 0.01em;
          }

          .footer-brand-copyright {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 0.94rem;
            font-weight: 600;
            color: #64748b;
            margin: 0;
            letter-spacing: -0.01em;
          }

          .footer-saffron-bold {
            color: #ff671f;
            font-weight: 800;
            letter-spacing: -0.01em;
          }

          @media (max-width: 768px) {
            .footer-amoled-section {
              padding: 2rem 1rem 7.5rem 1rem !important;
            }
            .footer-amoled-card {
              padding: 2rem 1.25rem;
              border-radius: 20px;
            }
            .footer-radar-pill {
              font-size: 0.74rem;
              padding: 6px 13px;
              gap: 10px;
            }
            .footer-tech-stack-tagline {
              font-size: 0.78rem;
            }
            .footer-brand-copyright {
              font-size: 0.88rem;
            }
          }
        `}
      </style>

      <footer className="footer-amoled-section">
        <motion.div 
          className="footer-amoled-card"
          variants={footerCardVariants}
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

          <div className="footer-stack-center">
            {/* Top Level: Radar Status Indicator */}
            <div className="footer-radar-pill">
              <div className="footer-radar-beacon">
                <span className="footer-radar-core" />
                <span className="footer-radar-wave" />
                <span className="footer-radar-wave-outer" />
              </div>
              <span>Systems Active • Open to Opportunities</span>
            </div>

            {/* Middle Level: Engineering Tagline */}
            <p className="footer-tech-stack-tagline">
              <FaCode size={14} color="#ff671f" />
              <span>Built for High Performance</span>
            </p>

            {/* Bottom Level: Saffron Copyright */}
            <p className="footer-brand-copyright">
              &copy; <span className="footer-saffron-bold">2026 Nikhil Gupta</span>. All Rights Reserved.
            </p>
          </div>
        </motion.div>
      </footer>
    </>
  );
}

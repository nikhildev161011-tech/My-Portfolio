import React, { useState } from 'react';
import { FaHome, FaUser, FaGraduationCap, FaCode, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function MacDock() {
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const dockItems = [
    { name: "Home", icon: <FaHome size={20} color="#ff671f" />, type: "scroll", target: "#home" },
    { name: "About Me", icon: <FaUser size={18} color="#e2e8f0" />, type: "scroll", target: "#about" },
    { name: "Education", icon: <FaGraduationCap size={20} color="#e2e8f0" />, type: "scroll", target: "#education" },
    { name: "LeetCode", icon: <SiLeetcode size={20} color="#f59e0b" />, type: "link", url: "https://leetcode.com/u/nikhil161011/" },
    { name: "Projects", icon: <FaCode size={19} color="#e2e8f0" />, type: "scroll", target: "#projects" },
    { name: "Contact", icon: <FaEnvelope size={18} color="#ff671f" />, type: "menu" }
  ];

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    const itemElement = target?.closest('.dock-icon-item');
    if (itemElement) {
      const index = itemElement.getAttribute('data-index');
      if (index !== null) {
        setActiveIndex(Number(index));
      }
    }
  };

  const handleItemClick = (item, e) => {
    if (item.type === "scroll") {
      e.preventDefault();
      if (item.target === "#home") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(item.target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setShowContactMenu(false);
      setActiveIndex(null);
    } else if (item.type === "link") {
      setShowContactMenu(false);
    } else if (item.type === "menu") {
      e.preventDefault();
      setShowContactMenu(!showContactMenu);
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

          /* Permanent Floating Taskbar Container */
          .mac-dock-floating-container {
            position: fixed;
            bottom: 22px;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            pointer-events: none;
            z-index: 9999;
            box-sizing: border-box;
            padding: 0 1rem;
          }

          /* Liquid Glass AMOLED Taskbar Surface */
          .mac-dock-surface {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 9px 16px;
            background: rgba(12, 12, 16, 0.72);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 9999px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9), 0 0 20px rgba(255, 103, 31, 0.08);
            pointer-events: auto;
            position: relative;
            transform: translateZ(0);
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
          }

          .mac-dock-surface:hover {
            border-color: rgba(255, 103, 31, 0.35);
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.95), 0 0 25px rgba(255, 103, 31, 0.18);
          }

          /* Dock Icon Capsule */
          .dock-icon-item {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 44px;
            height: 44px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 50%;
            cursor: pointer;
            transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
            text-decoration: none;
            -webkit-tap-highlight-color: transparent;
          }

          .dock-icon-item:hover, .dock-icon-item.touch-active {
            transform: translateY(-6px) scale(1.15);
            border-color: rgba(255, 103, 31, 0.5);
            background: rgba(255, 103, 31, 0.12);
            box-shadow: 0 10px 22px rgba(255, 103, 31, 0.25);
            z-index: 10;
          }

          /* Tooltip Tag */
          .dock-tooltip {
            position: absolute;
            bottom: 58px;
            left: 50%;
            transform: translateX(-50%) translateY(4px);
            background: #09090b;
            color: #ffffff;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 0.75rem;
            font-weight: 700;
            padding: 5px 10px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transition: all 0.2s ease;
            pointer-events: none;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.8);
          }

          .dock-icon-item:hover .dock-tooltip, .dock-icon-item.touch-active .dock-tooltip {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(0);
          }

          /* Floating Contact Submenu */
          .contact-popup-menu {
            position: absolute;
            bottom: 74px;
            background: rgba(12, 12, 16, 0.9);
            backdrop-filter: blur(28px);
            -webkit-backdrop-filter: blur(28px);
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 18px;
            padding: 8px;
            display: flex;
            flex-direction: column;
            gap: 4px;
            box-shadow: 0 20px 45px rgba(0, 0, 0, 0.95), 0 0 25px rgba(255, 103, 31, 0.12);
            z-index: 50;
            pointer-events: auto;
            animation: popUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          @keyframes popUp {
            0% { opacity: 0; transform: translateY(10px) scale(0.95); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }

          .contact-popup-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 9px 14px;
            color: #cbd5e1;
            text-decoration: none;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 0.85rem;
            font-weight: 700;
            border-radius: 12px;
            transition: all 0.2s ease;
            white-space: nowrap;
          }

          .contact-popup-item:hover {
            background: rgba(255, 103, 31, 0.15);
            color: #ffffff;
          }

          /* 100% Mobile Responsive Bottom Nav Bar */
          @media (max-width: 600px) {
            .mac-dock-floating-container {
              bottom: 12px;
              padding: 0 0.5rem;
            }
            .mac-dock-surface {
              gap: 8px;
              padding: 7px 12px;
              border-radius: 9999px;
            }
            .dock-icon-item {
              width: 38px;
              height: 38px;
            }
            .dock-icon-item svg {
              width: 17px;
              height: 17px;
            }
            .dock-tooltip {
              display: none;
            }
            .contact-popup-menu {
              bottom: 64px;
            }
          }
        `}
      </style>

      <div className="mac-dock-floating-container">
        {showContactMenu && (
          <div className="contact-popup-menu">
            <a 
              href="https://github.com/nikhildev161011-tech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-popup-item"
            >
              <FaGithub size={16} color="#ffffff" /> GitHub Profile
            </a>
            <a 
              href="https://www.linkedin.com/in/nikhil-gupta-64697b3b6" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-popup-item"
            >
              <FaLinkedin size={16} color="#0a66c2" /> LinkedIn Profile
            </a>
            <a 
              href="mailto:nikhil.dev161011@gmail.com" 
              className="contact-popup-item"
            >
              <FaEnvelope size={16} color="#ff671f" /> Send Email
            </a>
          </div>
        )}

        <div 
          className="mac-dock-surface"
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setActiveIndex(null)}
        >
          {dockItems.map((item, index) => (
            <a 
              key={index}
              data-index={index}
              href={item.url || item.target || "#"}
              target={item.url ? "_blank" : "_self"}
              rel={item.url ? "noopener noreferrer" : ""}
              className={`dock-icon-item ${activeIndex === index ? 'touch-active' : ''}`}
              onClick={(e) => handleItemClick(item, e)}
            >
              {item.icon}
              <span className="dock-tooltip">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

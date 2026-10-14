import React, { useState } from 'react';
import { FaHome, FaUser, FaGraduationCap, FaCode, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function MacDock() {
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const dockItems = [
    { name: "Home", icon: <FaHome size={22} color="#2563eb" />, type: "scroll", target: "#home" },
    { name: "About Me", icon: <FaUser size={20} color="#4f46e5" />, type: "scroll", target: "#about" },
    { name: "Education", icon: <FaGraduationCap size={22} color="#0284c7" />, type: "scroll", target: "#education" },
    { name: "LeetCode", icon: <SiLeetcode size={22} color="#f59e0b" />, type: "link", url: "https://leetcode.com/u/nikhil161011/" },
    { name: "Projects", icon: <FaCode size={22} color="#059669" />, type: "scroll", target: "#projects" },
    { name: "Contact", icon: <FaEnvelope size={20} color="#dc2626" />, type: "menu" }
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
          .mac-dock-seamless-container {
            display: flex;
            justify-content: center;
            width: 100%;
            padding: 2.5rem 1rem 3rem 1rem;
            background: transparent !important;
            border: none !important;
            border-top: none !important;
            box-sizing: border-box;
            position: relative;
            z-index: 10;
          }

          .mac-dock {
            display: flex;
            align-items: flex-end;
            justify-content: center;
            gap: 12px;
            padding: 10px 18px;
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(226, 232, 240, 0.85);
            border-radius: 24px;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
            max-width: 100%;
            touch-action: none;
            position: relative;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
          }

          .mac-dock:hover {
            border-color: #2563eb;
            box-shadow: 0 14px 35px rgba(37, 99, 235, 0.12);
          }

          .dock-icon-item {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(226, 232, 240, 0.9);
            border-radius: 14px;
            cursor: pointer;
            transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
            text-decoration: none;
            -webkit-tap-highlight-color: transparent;
          }

          .dock-icon-item:hover, .dock-icon-item.touch-active {
            transform: translateY(-8px) scale(1.2);
            border-color: #2563eb;
            background: #eff6ff;
            box-shadow: 0 10px 22px rgba(37, 99, 235, 0.25);
            z-index: 10;
          }

          .dock-tooltip {
            position: absolute;
            bottom: 60px;
            left: 50%;
            transform: translateX(-50%) translateY(4px);
            background: #0f172a;
            color: #ffffff;
            font-size: 0.75rem;
            font-weight: 700;
            padding: 4px 8px;
            border-radius: 6px;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transition: all 0.2s ease;
            pointer-events: none;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }

          .dock-icon-item:hover .dock-tooltip, .dock-icon-item.touch-active .dock-tooltip {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(0);
          }

          .contact-popup-menu {
            position: absolute;
            bottom: 85px;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(226, 232, 240, 0.9);
            border-radius: 18px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 6px;
            box-shadow: 0 15px 35px rgba(15, 23, 42, 0.12);
            z-index: 50;
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
            padding: 8px 14px;
            color: #334155;
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 700;
            border-radius: 10px;
            transition: all 0.2s ease;
            white-space: nowrap;
          }

          .contact-popup-item:hover {
            background-color: #eff6ff;
            color: #2563eb;
          }

          @media (max-width: 480px) {
            .mac-dock-seamless-container {
              padding: 1.5rem 0.5rem 2.5rem 0.5rem !important;
            }
            .mac-dock {
              gap: 8px;
              padding: 8px 12px;
            }
            .dock-icon-item {
              width: 42px;
              height: 42px;
            }
          }
        `}
      </style>

      <div className="mac-dock-seamless-container">
        {showContactMenu && (
          <div className="contact-popup-menu">
            <a 
              href="https://github.com/nikhildev161011-tech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-popup-item"
            >
              <FaGithub size={16} color="#0f172a" /> GitHub Profile
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
              <FaEnvelope size={16} color="#ea4335" /> Send Email
            </a>
          </div>
        )}

        <div 
          className="mac-dock"
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
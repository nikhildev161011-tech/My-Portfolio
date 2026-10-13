import React, { useState } from 'react';
import { FaHome, FaUser, FaGraduationCap, FaCode, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function MacDock() {
  const [showContactMenu, setShowContactMenu] = useState(false);

  const dockItems = [
    { name: "Home", icon: <FaHome size={24} color="#2563eb" />, type: "scroll", target: "#top" },
    { name: "About Me", icon: <FaUser size={22} color="#4f46e5" />, type: "scroll", target: "#about" },
    { name: "Education", icon: <FaGraduationCap size={24} color="#0284c7" />, type: "scroll", target: "#education" },
    { name: "LeetCode", icon: <SiLeetcode size={24} color="#f59e0b" />, type: "link", url: "https://leetcode.com/u/nikhil161011/" },
    { name: "Projects", icon: <FaCode size={24} color="#059669" />, type: "scroll", target: "#projects" },
    { name: "Contact", icon: <FaEnvelope size={22} color="#dc2626" />, type: "menu" }
  ];

  const handleItemClick = (item, e) => {
    if (item.type === "scroll") {
      e.preventDefault();
      if (item.target === "#top") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(item.target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setShowContactMenu(false);
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
          .mac-dock-container {
            display: flex;
            justify-content: center;
            width: 100%;
            padding: 1.5rem 1rem;
            background-color: #f8fafc;
            box-sizing: border-box;
            position: relative;
          }

          .mac-dock {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
            padding: 10px 16px;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(37, 99, 235, 0.2);
            border-radius: 22px;
            box-shadow: 0 10px 30px rgba(37, 99, 235, 0.12);
            max-width: 100%;
          }

          .dock-icon-item {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            cursor: pointer;
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
            text-decoration: none;
            -webkit-tap-highlight-color: transparent;
          }

          .dock-icon-item:hover, .dock-icon-item:active {
            transform: translateY(-6px) scale(1.15);
            border-color: #2563eb;
            background: #eff6ff;
            box-shadow: 0 10px 22px rgba(37, 99, 235, 0.25);
            z-index: 10;
          }

          .dock-tooltip {
            position: absolute;
            bottom: 56px;
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

          .dock-icon-item:hover .dock-tooltip {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(0);
          }

          .contact-popup-menu {
            position: absolute;
            bottom: 85px;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 16px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
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
            padding: 8px 12px;
            color: #334155;
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 700;
            border-radius: 8px;
            transition: all 0.2s ease;
            white-space: nowrap;
          }

          .contact-popup-item:hover {
            background-color: #eff6ff;
            color: #2563eb;
          }

          @media (max-width: 480px) {
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

      <div className="mac-dock-container">
        {showContactMenu && (
          <div className="contact-popup-menu">
            <a href="https://github.com/nikhildev161011-tech" target="_blank" rel="noopener noreferrer" className="contact-popup-item">
              <FaGithub size={16} color="#0f172a" /> GitHub Profile
            </a>
            <a href="https://www.linkedin.com/in/nikhil-gupta-64697b3b6" target="_blank" rel="noopener noreferrer" className="contact-popup-item">
              <FaLinkedin size={16} color="#0A66C2" /> LinkedIn Profile
            </a>
            <a href="mailto:nikhildev16161011@gmail.com" className="contact-popup-item">
              <FaEnvelope size={16} color="#EA4335" /> Send Email
            </a>
          </div>
        )}

        <div className="mac-dock">
          {dockItems.map((item, index) => (
            <a 
              key={index}
              href={item.link || item.target || "#"}
              target={item.url ? "_blank" : "_self"}
              rel={item.url ? "noopener noreferrer" : ""}
              className="dock-icon-item"
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
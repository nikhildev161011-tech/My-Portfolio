import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaCode, FaGraduationCap } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('HOME');

  const fullText = "Nikhil gupta.";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const handleTyping = () => {
      const currentLength = displayedText.length;

      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, currentLength + 1));
        if (currentLength + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 3000);
          setTypingSpeed(80);
        }
      } else {
        setDisplayedText(fullText.substring(0, currentLength - 1));
        if (currentLength - 1 === 0) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(120);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, typingSpeed]);

  const menuItems = [
    { name: 'HOME', href: '#home', icon: <FaHome size={16} color="#2563eb" /> },
    { name: 'ABOUT', href: '#about', icon: <FaUser size={15} color="#2563eb" /> },
    { name: 'PROJECTS', href: '#projects', icon: <FaCode size={16} color="#2563eb" /> },
    { name: 'EDUCATION', href: '#education', icon: <FaGraduationCap size={17} color="#2563eb" /> },
    { name: 'LEETCODE', href: '#leetcode', icon: <SiLeetcode size={16} color="#f59e0b" /> }
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');

          .signature-writing-container {
            font-family: 'Caveat', cursive;
            font-size: 1.9rem;
            font-weight: 700;
            color: #000000;
            letter-spacing: 0.06em;
            display: inline-block;
            white-space: nowrap;
            border-right: none !important;
            min-height: 2.2rem;
          }

          .menu-link {
            transition: all 0.25s ease-in-out;
            display: inline-flex;
            align-items: center;
            gap: 12px;
          }
        `}
      </style>

      {/* Header Bar */}
      <header style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 50, 
        width: '100%',
        backgroundColor: 'rgba(248, 250, 252, 0.9)', 
        backdropFilter: 'blur(10px)', 
        borderBottom: '1px solid #e2e8f0',
        padding: '0.75rem 1.5rem',
        boxSizing: 'border-box'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
          
          {/* Hamburger Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '5px', 
              padding: '0.5rem',
              zIndex: 60 
            }}
            aria-label="Open Menu"
          >
            <span style={{ width: '24px', height: '2px', backgroundColor: '#0f172a', borderRadius: '2px' }}></span>
            <span style={{ width: '18px', height: '2px', backgroundColor: '#0f172a', borderRadius: '2px' }}></span>
            <span style={{ width: '24px', height: '2px', backgroundColor: '#0f172a', borderRadius: '2px' }}></span>
          </button>

          {/* Center Logo with Infinite Writing Effect */}
          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center' }}>
            <div className="signature-writing-container">
              {displayedText}
            </div>
          </div>

          <div style={{ width: '32px' }}></div>
        </div>
      </header>

      {/* Slide-in Mobile Menu Drawer (Simple Clean Background) */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 100,
          display: 'flex',
          transition: 'all 0.3s ease'
        }}>
          <div style={{
            width: '280px',
            backgroundColor: '#ffffff',
            height: '100%',
            padding: '2rem 1.5rem',
            boxShadow: '4px 0 15px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box'
          }}>
            <div>
              {/* Close Button */}
              <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '2.5rem' }}>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  style={{ background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer', color: '#0f172a', padding: 0 }}
                >
                  ✕
                </button>
              </div>

              {/* Navigation Links with Icons */}
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {menuItems.map((item) => {
                  const isActive = activeItem === item.name;
                  return (
                    <a 
                      key={item.name}
                      href={item.href} 
                      onClick={() => {
                        setActiveItem(item.name);
                        setIsMenuOpen(false);
                      }} 
                      className="menu-link"
                      style={{ 
                        fontSize: '1rem', 
                        fontWeight: '700', 
                        color: isActive ? '#2563eb' : '#000000', 
                        textDecoration: 'none',
                        letterSpacing: '0.05em',
                        transform: isActive ? 'scale(1.04)' : 'scale(1)',
                        transition: 'transform 0.2s ease, color 0.2s ease'
                      }}
                    >
                      {item.icon}
                      {item.name}
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>

          <div style={{ flex: 1 }} onClick={() => setIsMenuOpen(false)}></div>
        </div>
      )}
    </>
  );
}
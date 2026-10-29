import React, { useState } from 'react';
import { FaHome, FaUser, FaCode, FaGraduationCap, FaTerminal } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('HOME');

  const menuItems = [
    { name: 'HOME', href: '#home', icon: <FaHome size={22} color="#ff671f" /> },
    { name: 'ABOUT', href: '#about', icon: <FaUser size={20} color="#ff671f" /> },
    { name: 'PROJECTS', href: '#projects', icon: <FaCode size={21} color="#ff671f" /> },
    { name: 'EDUCATION', href: '#education', icon: <FaGraduationCap size={23} color="#ff671f" /> },
    { name: 'LEETCODE', href: '#leetcode', icon: <SiLeetcode size={21} color="#ff671f" /> },
    { name: 'CONTACT', href: '#contact', icon: <FiMail size={21} color="#ff671f" /> },
    { name: 'TERMINAL', href: '#console', icon: <FaTerminal size={19} color="#ff671f" /> }
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&display=swap');

          .signature-wrapper {
            position: relative;
            display: inline-block;
            font-family: 'Caveat', cursive;
            font-size: 2.2rem;
            font-weight: 700;
            white-space: nowrap;
          }

          .signature-base {
            color: #27272a;
            user-select: none;
          }

          .signature-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            color: #ffffff;
            overflow: hidden;
            white-space: nowrap;
            animation: signatureDraw 3.5s ease-in-out infinite;
          }

          @keyframes signatureDraw {
            0% {
              width: 0%;
            }
            70% {
              width: 100%;
            }
            90% {
              width: 100%;
            }
            100% {
              width: 0%;
            }
          }

          .menu-link-item {
            display: inline-flex;
            align-items: center;
            gap: 16px;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 1.35rem;
            font-weight: 800;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            text-decoration: none;
            transition: transform 0.25s ease, color 0.25s ease;
          }

          .menu-link-item:hover {
            transform: translateX(8px);
            color: #ff671f !important;
          }

          .menu-icon-container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            flex-shrink: 0;
          }
        `}
      </style>

      <header style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 50, 
        width: '100%',
        backgroundColor: '#000000', 
        backdropFilter: 'blur(16px)', 
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid #18181b',
        padding: '0.85rem 1.5rem',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}>
        <div 
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '450px',
            height: '450px',
            transform: 'translate(30%, -40%)',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 70% 30%, rgba(255, 103, 31, 0.16) 0%, rgba(255, 103, 31, 0.05) 30%, transparent 65%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            zIndex: 1
          }} 
        />

        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '350px',
            height: '350px',
            transform: 'translate(-30%, 40%)',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 70%, rgba(255, 103, 31, 0.12) 0%, rgba(255, 103, 31, 0.04) 28%, transparent 60%)',
            filter: 'blur(55px)',
            pointerEvents: 'none',
            zIndex: 1
          }} 
        />

        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          position: 'relative',
          zIndex: 2
        }}>
          
          <button 
            type="button"
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
            aria-label="Open Navigation Menu"
          >
            <span style={{ width: '24px', height: '2.5px', backgroundColor: '#ff671f', borderRadius: '2px', boxShadow: '0 0 10px rgba(255, 103, 31, 0.5)' }}></span>
            <span style={{ width: '18px', height: '2.5px', backgroundColor: '#ff671f', borderRadius: '2px', boxShadow: '0 0 10px rgba(255, 103, 31, 0.5)' }}></span>
            <span style={{ width: '24px', height: '2.5px', backgroundColor: '#ff671f', borderRadius: '2px', boxShadow: '0 0 10px rgba(255, 103, 31, 0.5)' }}></span>
          </button>

          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center' }}>
            <div className="signature-wrapper">
              <span className="signature-base">Nikhil gupta.</span>
              <span className="signature-overlay">Nikhil gupta.</span>
            </div>
          </div>

          <div style={{ width: '32px' }}></div>
        </div>
      </header>

      {isMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            zIndex: 100,
            display: 'flex'
          }}
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            style={{
              width: '320px',
              maxWidth: '85vw',
              backgroundColor: '#000000',
              borderRight: '1px solid #18181b',
              height: '100%',
              padding: '2.5rem 2rem',
              boxShadow: '15px 0 40px rgba(0, 0, 0, 0.9)',
              display: 'flex',
              flexDirection: 'column',
              boxSizing: 'border-box',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '2.5rem' }}>
              <button 
                type="button"
                onClick={() => setIsMenuOpen(false)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  fontSize: '1.5rem', 
                  fontWeight: '800', 
                  cursor: 'pointer', 
                  color: '#ff671f', 
                  padding: '4px' 
                }}
                aria-label="Close Navigation Menu"
              >
                ✕
              </button>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
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
                    className="menu-link-item"
                    style={{ 
                      color: isActive ? '#ff671f' : '#a1a1aa',
                      transform: isActive ? 'translateX(8px)' : 'none'
                    }}
                  >
                    <span className="menu-icon-container">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

import React, { useState } from 'react';
import { FaHome, FaUser, FaCode, FaGraduationCap, FaTerminal } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('HOME');

  const menuItems = [
    { name: 'HOME', href: '#home', icon: <FaHome size={22} color="#2563eb" /> },
    { name: 'ABOUT', href: '#about', icon: <FaUser size={20} color="#2563eb" /> },
    { name: 'PROJECTS', href: '#projects', icon: <FaCode size={21} color="#2563eb" /> },
    { name: 'EDUCATION', href: '#education', icon: <FaGraduationCap size={23} color="#2563eb" /> },
    { name: 'LEETCODE', href: '#leetcode', icon: <SiLeetcode size={21} color="#f59e0b" /> },
    { name: 'CONTACT', href: '#contact', icon: <FiMail size={21} color="#ea4335" /> },
    { name: 'TERMINAL', href: '#console', icon: <FaTerminal size={19} color="#2563eb" /> }
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
            color: #cbd5e1;
            user-select: none;
          }

          .signature-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            color: #0f172a;
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
            color: #2563eb !important;
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
        backgroundColor: 'rgba(248, 250, 252, 0.85)', 
        backdropFilter: 'blur(12px)', 
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e2e8f0',
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
            background: 'radial-gradient(circle at 70% 30%, rgba(15, 23, 42, 0.45) 0%, rgba(15, 23, 42, 0.25) 30%, rgba(15, 23, 42, 0.08) 55%, transparent 75%)',
            filter: 'blur(50px)',
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
            background: 'radial-gradient(circle at 30% 70%, rgba(15, 23, 42, 0.35) 0%, rgba(15, 23, 42, 0.18) 32%, transparent 70%)',
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
            <span style={{ width: '24px', height: '2px', backgroundColor: '#0f172a', borderRadius: '2px' }}></span>
            <span style={{ width: '18px', height: '2px', backgroundColor: '#0f172a', borderRadius: '2px' }}></span>
            <span style={{ width: '24px', height: '2px', backgroundColor: '#0f172a', borderRadius: '2px' }}></span>
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
            backgroundColor: 'rgba(15, 23, 42, 0.45)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            zIndex: 100,
            display: 'flex'
          }}
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            style={{
              width: '320px',
              maxWidth: '85vw',
              backgroundColor: '#ffffff',
              height: '100%',
              padding: '2.5rem 2rem',
              boxShadow: '10px 0 30px rgba(0, 0, 0, 0.12)',
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
                  color: '#0f172a', 
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
                      color: isActive ? '#2563eb' : '#0f172a',
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
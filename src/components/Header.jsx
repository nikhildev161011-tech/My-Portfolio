import React, { useState } from 'react';
import { FaHome, FaUser, FaCode, FaGraduationCap, FaTerminal } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('HOME');

  const menuItems = [
    { name: 'HOME', href: '#home', icon: <FaHome size={24} color="#2563eb" /> },
    { name: 'ABOUT', href: '#about', icon: <FaUser size={22} color="#2563eb" /> },
    { name: 'PROJECTS', href: '#projects', icon: <FaCode size={23} color="#2563eb" /> },
    { name: 'EDUCATION', href: '#education', icon: <FaGraduationCap size={25} color="#2563eb" /> },
    { name: 'LEETCODE', href: '#leetcode', icon: <SiLeetcode size={23} color="#f59e0b" /> },
    { name: 'CONTACT', href: '#contact', icon: <FiMail size={23} color="#EA4335" /> },
    { name: 'TERMINAL', href: '#console', icon: <FaTerminal size={21} color="#2563eb" /> }
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800;900&display=swap');

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

          .menu-link {
            transition: all 0.25s ease-in-out;
            display: inline-flex;
            align-items: center;
            gap: 18px;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 900;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            text-decoration: none;
            line-height: 1.1;
          }

          .menu-link:hover {
            transform: translateX(8px) scale(1.03);
            color: #2563eb !important;
          }

          .menu-icon-wrap {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 32px;
          }
        `}
      </style>

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
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          backdropFilter: 'blur(4px)',
          zIndex: 100,
          display: 'flex',
          transition: 'all 0.3s ease'
        }}>
          <div style={{
            width: '320px',
            backgroundColor: '#ffffff',
            height: '100%',
            padding: '2.5rem 2rem',
            boxShadow: '6px 0 25px rgba(0,0,0,0.15)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            overflowY: 'auto'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '3rem' }}>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  style={{ background: 'none', border: 'none', fontSize: '1.6rem', fontWeight: '800', cursor: 'pointer', color: '#0f172a', padding: 0 }}
                >
                  ✕
                </button>
              </div>

              <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.85rem' }}>
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
                        fontSize: '1.45rem', 
                        color: isActive ? '#2563eb' : '#0f172a', 
                        transform: isActive ? 'translateX(8px)' : 'none'
                      }}
                    >
                      <span className="menu-icon-wrap">
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
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
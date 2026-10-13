import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('HOME');

  const menuItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EDUCATION', href: '#education' }
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');

          @keyframes smoothWrite {
            0% {
              width: 0;
            }
            100% {
              width: 100%;
            }
          }

          .signature-writing-container {
            font-family: 'Caveat', cursive;
            font-size: 1.9rem;
            font-weight: 700;
            color: #000000;
            letter-spacing: 0.06em;
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            width: 0;
            animation: smoothWrite 2.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            border-right: none !important;
          }

          .menu-link {
            transition: all 0.25s ease-in-out;
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

          {/* Center Logo with Smooth Writing Effect */}
          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center' }}>
            <div className="signature-writing-container">
              Nikhil gupta.
            </div>
          </div>

          <div style={{ width: '32px' }}></div>
        </div>
      </header>

      {/* Slide-in Mobile Menu Drawer */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(4px)',
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

              {/* Navigation Links */}
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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
                        display: 'inline-block',
                        transform: isActive ? 'scale(1.06)' : 'scale(1)',
                        transition: 'transform 0.2s ease, color 0.2s ease'
                      }}
                    >
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

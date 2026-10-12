import React, { useState, useEffect, useRef } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');

          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }

          .typewriter-container {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            width: 0;
          }

          .animate-typing {
            animation: typing 2.5s steps(24, end) forwards;
          }

          .footer-cursive-heading {
            font-family: 'Caveat', cursive;
            font-size: clamp(2rem, 6.5vw, 5.5rem);
            font-weight: 700;
            color: #0f172a;
            line-height: 1.1;
            letter-spacing: 0.02em;
            text-align: center;
            margin: 0;
            white-space: nowrap;
          }

          .footer-nav-link {
            color: #64748b;
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 600;
            transition: color 0.2s ease;
          }
          .footer-nav-link:hover {
            color: #2563eb;
          }

          @media (max-width: 480px) {
            .footer-cursive-heading {
              font-size: clamp(2.1rem, 7.5vw, 3rem);
            }
          }
        `}
      </style>

      <footer ref={footerRef} style={{ 
        width: '100%', 
        padding: '4.5rem 1rem 3rem 1rem', 
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        overflow: 'hidden'
      }}>
        
        <div style={{ textAlign: 'center', width: '100%', maxWidth: '950px' }}>
          <h2 className="footer-cursive-heading">
            <span className={`typewriter-container ${isVisible ? 'animate-typing' : ''}`}>
              Developer & Cricketer
            </span>
          </h2>
          <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)', borderRadius: '2px', margin: '1rem auto 0 auto' }}></div>
        </div>

        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          fontSize: '0.85rem',
          fontWeight: '600',
          color: '#475569',
          textAlign: 'center',
          padding: '0 0.5rem'
        }}>
          <span style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px rgba(34, 197, 94, 0.5)', flexShrink: 0 }}></span>
          <span>Always learning DSA & building for the future</span>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#home" className="footer-nav-link">Home</a>
          <a href="#about" className="footer-nav-link">About</a>
          <a href="#projects" className="footer-nav-link">Projects</a>
          <a href="#education" className="footer-nav-link">Education</a>
        </div>

        <div style={{ textAlign: 'center', borderTop: '1px solid #f1f5f9', width: '100%', paddingTop: '1.5rem', maxWidth: '600px' }}>
          <p style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: '600', margin: 0, letterSpacing: '0.02em' }}>
            &copy; {new Date().getFullYear()} All rights reserved &bull; Nikhil Gupta
          </p>
        </div>

      </footer>
    </>
  );
}

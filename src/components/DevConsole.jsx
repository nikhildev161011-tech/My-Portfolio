import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaUser, FaCode, FaEnvelope, FaGraduationCap, FaCheckCircle, FaTrash } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function DevConsole() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Nikhil Gupta\'s Terminal v2.6.0' },
    { type: 'output', text: 'Type "help" to see available commands or click quick buttons below.' }
  ]);
  
  const bottomRef = useRef(null);

  const ultraSmoothEase = [0.16, 1, 0.3, 1];

  const cardEntranceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: ultraSmoothEase
      }
    }
  };

  const headerEntranceVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: ultraSmoothEase
      }
    }
  };

  const arrowLineVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 0.85,
        delay: 0.25,
        ease: ultraSmoothEase
      }
    }
  };

  const arrowHeadVariants = {
    hidden: { opacity: 0, scale: 0.2, x: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.35,
        delay: 0.85,
        ease: ultraSmoothEase
      }
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    let response = '';

    switch (trimmed) {
      case 'help':
        response = 'Available commands: about, skills, projects, education, leetcode, contact, clear';
        break;
      case 'about':
        response = 'I am Nikhil Gupta — a passionate Web Developer & Cricketer, building modern, scalable web applications with a strong focus on C++ and DSA.';
        break;
      case 'skills':
        response = 'Tech Stack: C++, JavaScript, React, Node.js, Express, MongoDB, Tailwind CSS, Git & GitHub, Problem Solving.';
        break;
      case 'projects':
        response = 'Featured Projects: Money Tracker (PWA), DevCart (E-commerce), PCIMT Portal, CricZen, ReelDrop.';
        break;
      case 'education':
        response = 'Education: Pursuing BCA from IGNOU with a strong foundation in Computer Applications and Software Engineering.';
        break;
      case 'leetcode':
        response = 'LeetCode Profile: Active problem solver targeting data structures & algorithms mastery.';
        break;
      case 'contact':
        response = 'Get in touch: nikhil.dev161011@gmail.com | LinkedIn | GitHub';
        break;
      case 'clear':
        setHistory([]);
        return;
      case '':
        response = '';
        break;
      default:
        response = `command not found: ${trimmed}. Type "help" for a list of valid commands.`;
    }

    setHistory(prev => [
      ...prev,
      { type: 'input', text: cmd },
      ...(response ? [{ type: 'output', text: response }] : [])
    ]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  const handleInputFocus = (e) => {
    setTimeout(() => {
      e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap');

          .console-amoled-section {
            width: 100%;
            padding: 3.5rem 1.5rem 5rem 1.5rem;
            background-color: #000000;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
            overflow: hidden;
          }

          .console-amoled-card {
            position: relative;
            background: rgba(10, 10, 12, 0.65);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 24px;
            padding: 2.75rem;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.85);
            overflow: hidden;
            box-sizing: border-box;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
            transform: translateZ(0);
          }

          .console-amoled-card:hover {
            border-color: rgba(255, 103, 31, 0.35);
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(255, 103, 31, 0.08);
          }

          .console-luxury-heading {
            font-family: 'Syne', sans-serif;
            font-size: clamp(2.1rem, 5vw, 3.8rem);
            font-weight: 800;
            line-height: 1.15;
            letter-spacing: -0.04em;
            margin: 0;
            display: inline-block;
            background: linear-gradient(180deg, #ffffff 20%, #cbd5e1 60%, #1e293b 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 10px 30px rgba(255, 255, 255, 0.04);
            white-space: normal;
            word-break: normal;
            overflow-wrap: break-word;
          }

          .arrow-track-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            width: 100%;
            max-width: 260px;
            height: 16px;
            margin-top: 6px;
          }

          .arrow-line-body {
            height: 2px;
            background: linear-gradient(90deg, #ff671f 0%, #ff8533 100%);
            box-shadow: 0 0 10px rgba(255, 103, 31, 0.6);
            border-radius: 2px;
          }

          .arrow-head-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: -2px;
            color: #ff671f;
            filter: drop-shadow(0 0 6px rgba(255, 103, 31, 0.7));
          }

          .console-terminal-shell {
            background: rgba(0, 0, 0, 0.75);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 0 12px 36px rgba(0, 0, 0, 0.7);
            font-family: 'JetBrains Mono', monospace;
            margin-top: 0.5rem;
          }

          .console-terminal-titlebar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: rgba(255, 255, 255, 0.03);
            padding: 12px 18px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }

          .console-terminal-dots {
            display: flex;
            gap: 7px;
          }

          .console-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
          }

          .dot-red { background: #ef4444; }
          .dot-yellow { background: #f59e0b; }
          .dot-green { background: #10b981; }

          .console-terminal-badge {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #94a3b8;
            font-size: 0.82rem;
            font-weight: 700;
            letter-spacing: 0.02em;
          }

          .console-terminal-body {
            padding: 1.5rem;
            height: 230px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 12px;
            color: #e2e8f0;
            font-size: 0.9rem;
            background: transparent;
            WebkitOverflowScrolling: 'touch';
          }

          .console-terminal-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            padding: 0 1.5rem 1.25rem 1.5rem;
            background: transparent;
          }

          .console-quick-btn {
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #cbd5e1;
            padding: 6px 14px;
            border-radius: 9999px;
            font-size: 0.78rem;
            font-weight: 700;
            font-family: 'JetBrains Mono', monospace;
            cursor: pointer;
            transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, color 0.25s ease, background-color 0.25s ease;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
          }

          .console-quick-btn:hover {
            transform: translateY(-2px);
            border-color: rgba(255, 103, 31, 0.5);
            background: rgba(255, 103, 31, 0.08);
            color: #ffffff;
            box-shadow: 0 6px 16px rgba(255, 103, 31, 0.18);
          }

          .console-terminal-form {
            display: flex;
            align-items: center;
            padding: 14px 18px;
            background: rgba(255, 255, 255, 0.02);
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            gap: 10px;
          }

          .console-terminal-input {
            background: transparent;
            border: none;
            color: #ffffff;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.92rem;
            width: 100%;
            outline: none;
          }

          .console-terminal-input::placeholder {
            color: #64748b;
          }

          @media (max-width: 768px) {
            .console-amoled-section {
              padding: 2rem 1rem 3.5rem 1rem !important;
            }
            .console-amoled-card {
              padding: 1.85rem 1.25rem;
              border-radius: 20px;
            }
            .console-luxury-heading {
              font-size: clamp(1.85rem, 7.5vw, 2.5rem);
            }
            .arrow-track-wrapper {
              max-width: 220px;
            }
            .console-terminal-body {
              height: 200px;
              padding: 1.15rem;
              font-size: 0.84rem;
            }
          }
        `}
      </style>

      <section id="console" className="console-amoled-section">
        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2.5rem' 
        }}>
          
          <motion.div 
            className="console-amoled-card"
            variants={cardEntranceVariants}
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', zIndex: 1 }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', position: 'relative' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.06em', color: '#ff671f', textTransform: 'uppercase' }}>
                  Interactive Terminal
                </span>

                <motion.h2 
                  className="console-luxury-heading"
                  variants={headerEntranceVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  Dev Console
                </motion.h2>

                <div className="arrow-track-wrapper">
                  <motion.div 
                    className="arrow-line-body"
                    variants={arrowLineVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                  />
                  <motion.div 
                    className="arrow-head-icon"
                    variants={arrowHeadVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </motion.div>
                </div>
              </div>

              <div className="console-terminal-shell">
                <div className="console-terminal-titlebar">
                  <div className="console-terminal-dots">
                    <span className="console-dot dot-red"></span>
                    <span className="console-dot dot-yellow"></span>
                    <span className="console-dot dot-green"></span>
                  </div>
                  <div className="console-terminal-badge">
                    <FaTerminal size={12} color="#ff671f" />
                    <span>nikhil@portfolio ~ zsh</span>
                  </div>
                  <div style={{ width: '40px' }}></div>
                </div>

                <div className="console-terminal-body">
                  {history.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', lineHeight: '1.5' }}>
                      {item.type === 'input' ? (
                        <>
                          <span style={{ color: '#ff671f', fontWeight: 'bold' }}>➜</span>
                          <span style={{ color: '#a855f7', fontWeight: 'bold' }}>~</span>
                          <span style={{ color: '#ffffff', fontWeight: '600' }}>{item.text}</span>
                        </>
                      ) : (
                        <>
                          <span style={{ color: '#10b981', marginTop: '2px' }}>
                            <FaCheckCircle size={13} />
                          </span>
                          <span style={{ color: '#cbd5e1', fontWeight: '500' }}>{item.text}</span>
                        </>
                      )}
                    </div>
                  ))}
                  <div ref={bottomRef} />
                </div>

                <div className="console-terminal-buttons">
                  <button type="button" className="console-quick-btn" onClick={(e) => { e.preventDefault(); handleCommand('about'); }}>
                    <FaUser size={11} color="#ff671f" /> about
                  </button>
                  <button type="button" className="console-quick-btn" onClick={(e) => { e.preventDefault(); handleCommand('skills'); }}>
                    <FaCode size={11} color="#ff671f" /> skills
                  </button>
                  <button type="button" className="console-quick-btn" onClick={(e) => { e.preventDefault(); handleCommand('projects'); }}>
                    <FaGraduationCap size={11} color="#ff671f" /> projects
                  </button>
                  <button type="button" className="console-quick-btn" onClick={(e) => { e.preventDefault(); handleCommand('leetcode'); }}>
                    <SiLeetcode size={12} color="#f59e0b" /> leetcode
                  </button>
                  <button type="button" className="console-quick-btn" onClick={(e) => { e.preventDefault(); handleCommand('contact'); }}>
                    <FaEnvelope size={11} color="#ea4335" /> contact
                  </button>
                  <button type="button" className="console-quick-btn" onClick={(e) => { e.preventDefault(); handleCommand('clear'); }}>
                    <FaTrash size={11} color="#94a3b8" /> clear
                  </button>
                </div>

                <form onSubmit={onSubmit} className="console-terminal-form">
                  <span style={{ color: '#ff671f', fontWeight: 'bold' }}>➜</span>
                  <span style={{ color: '#a855f7', fontWeight: 'bold' }}>~</span>
                  <input 
                    type="text" 
                    className="console-terminal-input"
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    onFocus={handleInputFocus}
                    placeholder="type a command (e.g. help, skills)..." 
                  />
                </form>
              </div>

            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}

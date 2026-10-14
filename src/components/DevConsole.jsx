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
          .console-seamless-section {
            width: 100%;
            padding: 2.5rem 1.5rem 4rem 1.5rem;
            background: transparent !important;
            border: none !important;
            border-top: none !important;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            position: relative;
            z-index: 2;
          }

          .console-terminal-card {
            position: relative;
            max-width: 900px;
            width: 100%;
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(226, 232, 240, 0.85);
            border-radius: 24px;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.03);
            overflow: hidden;
            font-family: monospace;
            transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
          }
          .console-terminal-card:hover {
            border-color: #2563eb;
            box-shadow: 0 18px 40px rgba(37, 99, 235, 0.1);
            transform: translateY(-2px);
          }

          .console-quick-btn {
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid #cbd5e1;
            color: #0f172a;
            padding: 6px 14px;
            border-radius: 10px;
            font-size: 0.78rem;
            font-weight: 700;
            cursor: pointer;
            transition: transform 0.2s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.02);
          }
          .console-quick-btn:hover {
            transform: translateY(-2px);
            border-color: #2563eb;
            color: #2563eb;
            box-shadow: 0 6px 15px rgba(37, 99, 235, 0.15);
          }

          @media (max-width: 768px) {
            .console-seamless-section {
              padding: 1.5rem 1rem 3rem 1rem !important;
            }
          }
        `}
      </style>

      <section id="console" className="console-seamless-section">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="console-terminal-card"
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
              background: 'radial-gradient(circle at 70% 30%, rgba(15, 23, 42, 0.35) 0%, rgba(15, 23, 42, 0.18) 28%, rgba(15, 23, 42, 0.06) 52%, transparent 75%)',
              filter: 'blur(52px)',
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
              background: 'radial-gradient(circle at 30% 70%, rgba(15, 23, 42, 0.28) 0%, rgba(15, 23, 42, 0.14) 30%, transparent 70%)',
              filter: 'blur(56px)',
              pointerEvents: 'none',
              zIndex: 0
            }} 
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(248, 250, 252, 0.85)', padding: '12px 18px', borderBottom: '1px solid rgba(226, 232, 240, 0.8)' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569', fontSize: '0.85rem', fontWeight: '700' }}>
                <FaTerminal size={13} color="#2563eb" />
                <span>nikhil@portfolio ~ zsh</span>
              </div>
              <div></div>
            </div>

            <div style={{ padding: '1.5rem', height: '220px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', color: '#0f172a', fontSize: '0.92rem', background: 'transparent', WebkitOverflowScrolling: 'touch' }}>
              {history.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', lineHeight: '1.5' }}>
                  {item.type === 'input' ? (
                    <>
                      <span style={{ color: '#2563eb', fontWeight: 'bold' }}>➜</span>
                      <span style={{ color: '#9333ea', fontWeight: 'bold' }}>~</span>
                      <span style={{ color: '#0f172a', fontWeight: '600' }}>{item.text}</span>
                    </>
                  ) : (
                    <>
                      <span style={{ color: '#16a34a', marginTop: '2px' }}>
                        <FaCheckCircle size={13} />
                      </span>
                      <span style={{ color: '#334155', fontWeight: '500' }}>{item.text}</span>
                    </>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '0 1.5rem 1rem 1.5rem', background: 'transparent' }}>
              <button type="button" className="console-quick-btn" onClick={(e) => { e.preventDefault(); handleCommand('about'); }}>
                <FaUser size={11} color="#2563eb" /> about
              </button>
              <button type="button" className="console-quick-btn" onClick={(e) => { e.preventDefault(); handleCommand('skills'); }}>
                <FaCode size={11} color="#2563eb" /> skills
              </button>
              <button type="button" className="console-quick-btn" onClick={(e) => { e.preventDefault(); handleCommand('projects'); }}>
                <FaGraduationCap size={11} color="#2563eb" /> projects
              </button>
              <button type="button" className="console-quick-btn" onClick={(e) => { e.preventDefault(); handleCommand('leetcode'); }}>
                <SiLeetcode size={12} color="#f59e0b" /> leetcode
              </button>
              <button type="button" className="console-quick-btn" onClick={(e) => { e.preventDefault(); handleCommand('contact'); }}>
                <FaEnvelope size={11} color="#ea4335" /> contact
              </button>
              <button type="button" className="console-quick-btn" onClick={(e) => { e.preventDefault(); handleCommand('clear'); }}>
                <FaTrash size={11} color="#64748b" /> clear
              </button>
            </div>

            <form onSubmit={onSubmit} style={{ display: 'flex', alignItems: 'center', padding: '14px 18px', background: 'rgba(248, 250, 252, 0.85)', borderTop: '1px solid rgba(226, 232, 240, 0.8)', gap: '10px' }}>
              <span style={{ color: '#2563eb', fontWeight: 'bold' }}>➜</span>
              <span style={{ color: '#9333ea', fontWeight: 'bold' }}>~</span>
              <input 
                type="text" 
                style={{ background: 'transparent', border: 'none', color: '#0f172a', fontFamily: 'monospace', fontSize: '0.95rem', width: '100%', outline: 'none' }}
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                onFocus={handleInputFocus}
                placeholder="type a command (e.g. help, skills)..." 
              />
            </form>
          </div>
        </motion.div>
      </section>
    </>
  );
}
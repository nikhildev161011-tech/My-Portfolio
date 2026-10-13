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
        response = 'Tech Stack: C++, JavaScript, React, Vite, HTML5, CSS3, Tailwind CSS, Git & GitHub, Problem Solving.';
        break;
      case 'projects':
        response = 'Featured Projects: Modern React Portfolio, Mac Dock UI, LeetCode Progress Tracker, Full-stack Web Apps.';
        break;
      case 'education':
        response = 'Education: Pursuing BCA from IGNOU with a strong foundation in Computer Applications and Software Engineering.';
        break;
      case 'leetcode':
        response = 'LeetCode Profile: Active problem solver targeting data structures & algorithms mastery.';
        break;
      case 'contact':
        response = 'Get in touch: nikhildev16161011@gmail.com | LinkedIn | GitHub';
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
    <motion.div 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
    >
      <section id="console" style={{ width: '100%', padding: '4rem 1.5rem', backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '900px', width: '100%', background: '#ffffff', borderRadius: '20px', border: '1px solid #2563eb', boxShadow: '0 10px 30px rgba(37, 99, 235, 0.08)', overflow: 'hidden', fontFamily: 'monospace', position: 'relative' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f8fafc', padding: '12px 18px', borderBottom: '1px solid #e2e8f0' }}>
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

          <div style={{ padding: '1.5rem', height: '220px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', color: '#0f172a', fontSize: '0.92rem', background: '#ffffff', WebkitOverflowScrolling: 'touch' }}>
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

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '0 1.5rem 1rem 1.5rem', background: '#ffffff' }}>
            <button style={quickBtnStyle} onClick={(e) => { e.preventDefault(); handleCommand('about'); }}><FaUser size={11} /> about</button>
            <button style={quickBtnStyle} onClick={(e) => { e.preventDefault(); handleCommand('skills'); }}><FaCode size={11} /> skills</button>
            <button style={quickBtnStyle} onClick={(e) => { e.preventDefault(); handleCommand('projects'); }}><FaGraduationCap size={11} /> projects</button>
            <button style={quickBtnStyle} onClick={(e) => { e.preventDefault(); handleCommand('leetcode'); }}><SiLeetcode size={12} color="#f59e0b" /> leetcode</button>
            <button style={quickBtnStyle} onClick={(e) => { e.preventDefault(); handleCommand('contact'); }}><FaEnvelope size={11} /> contact</button>
            <button style={quickBtnStyle} onClick={(e) => { e.preventDefault(); handleCommand('clear'); }}><FaTrash size={11} /> clear</button>
          </div>

          <form onSubmit={onSubmit} style={{ display: 'flex', alignItems: 'center', padding: '14px 18px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', gap: '10px' }}>
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
      </section>
    </motion.div>
  );
}

const quickBtnStyle = {
  background: '#ffffff',
  border: '1px solid #2563eb',
  color: '#2563eb',
  padding: '6px 14px',
  borderRadius: '10px',
  fontSize: '0.78rem',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  boxShadow: '0 2px 5px rgba(37, 99, 235, 0.05)'
};
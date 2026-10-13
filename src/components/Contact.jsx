import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const headingLetters = "Contact Me".split("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" }
    }
  };

  const iconsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  };

  const iconBounceVariant = {
    hidden: { 
      opacity: 0, 
      y: -25, 
      scale: 0.4,
      rotate: -10 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 15,
        mass: 0.8
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipientEmail = "nikhil.dev161011@gmail.com";
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  const socialLinks = [
    {
      title: "Email",
      link: "mailto:nikhil.dev161011@gmail.com",
      icon: <FiMail size={22} color="#EA4335" />
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/nikhil-gupta-64697b3b6",
      icon: <FaLinkedin size={22} color="#0A66C2" />
    },
    {
      title: "GitHub",
      link: "https://github.com/nikhildev161011-tech",
      icon: <FaGithub size={22} color="#181717" />
    },
    {
      title: "Instagram",
      link: "https://instagram.com/nikhildev161011",
      icon: <FaInstagram size={22} color="#E4405F" />
    }
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&display=swap');

          .contact-main-heading {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: clamp(2.2rem, 5.5vw, 3.8rem);
            font-weight: 900;
            color: #0f172a;
            line-height: 1.15;
            letter-spacing: -0.03em;
            display: flex;
            overflow: hidden;
            margin: 0;
            white-space: nowrap;
          }

          .contact-wrapper-card {
            background: #ffffff;
            border: 1px solid #2563eb;
            border-radius: 20px;
            padding: 2.5rem;
            box-shadow: 0 10px 30px rgba(37, 99, 235, 0.08);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .contact-wrapper-card:hover {
            box-shadow: 0 15px 35px rgba(37, 99, 235, 0.15);
          }

          .contact-input-field {
            width: 100%;
            padding: 14px 16px;
            border-radius: 12px;
            border: 1px solid #cbd5e1;
            background: #f8fafc;
            color: #0f172a;
            font-size: 0.95rem;
            font-family: inherit;
            box-sizing: border-box;
            outline: none;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
          }
          .contact-input-field:focus {
            border-color: #2563eb;
            background: #ffffff;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
          }

          .contact-submit-outline-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            font-size: 0.95rem;
            font-weight: 700;
            color: #2563eb;
            background-color: #ffffff;
            border: 1.5px solid #2563eb;
            padding: 13px 20px;
            border-radius: 12px;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(37, 99, 235, 0.08);
            transition: all 0.25s ease;
          }
          .contact-submit-outline-btn:hover {
            background-color: #eff6ff;
            color: #1d4ed8;
            border-color: #1d4ed8;
            transform: translateY(-2px);
            box-shadow: 0 6px 18px rgba(37, 99, 235, 0.18);
          }

          .contact-social-icon-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            text-decoration: none;
            cursor: pointer;
            transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
          }
          .contact-social-icon-btn:hover {
            transform: translateY(-3px) scale(1.05);
            border-color: #2563eb;
            background: #eff6ff;
            box-shadow: 0 6px 15px rgba(37, 99, 235, 0.15);
          }

          @media (max-width: 768px) {
            .contact-section {
              padding: 3rem 1rem !important;
            }
            .contact-wrapper-card {
              padding: 1.5rem;
            }
            .contact-main-heading {
              font-size: clamp(1.8rem, 5vw, 2.4rem);
            }
          }
        `}
      </style>

      <section id="contact" className="contact-section" style={{ 
        width: '100%', 
        padding: '5rem 1.5rem', 
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        boxSizing: 'border-box'
      }}>
        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '3rem' 
        }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="contact-wrapper-card"
            style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', position: 'relative' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '-0.02em', color: '#2563eb', textTransform: 'uppercase' }}>
                Get In Touch
              </span>

              <motion.h2 
                className="contact-main-heading"
                variants={titleContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                {headingLetters.map((char, index) => (
                  <motion.span 
                    key={index} 
                    variants={letterVariants}
                    style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h2>

              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)', borderRadius: '2px', marginTop: '4px' }}></div>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2.5rem',
              alignItems: 'start'
            }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.7', margin: 0, fontWeight: '500' }}>
                  Have an exciting project idea, internship opportunity, or just want to chat about tech and DSA? Feel free to reach out directly!
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Connect Across Platforms
                  </span>
                  <motion.div 
                    variants={iconsContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}
                  >
                    {socialLinks.map((item, index) => (
                      <motion.a 
                        key={index}
                        href={item.link} 
                        target={item.title === "Email" ? "_self" : "_blank"} 
                        rel="noopener noreferrer" 
                        variants={iconBounceVariant}
                        className="contact-social-icon-btn" 
                        title={item.title}
                      >
                        {item.icon}
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </div>

              <div style={{ background: '#f8fafc', padding: '1.75rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#334155' }}>Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name" 
                      className="contact-input-field" 
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#334155' }}>Your Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email" 
                      className="contact-input-field" 
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#334155' }}>Message</label>
                    <textarea 
                      name="message" 
                      required 
                      rows="6" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message" 
                      className="contact-input-field" 
                      style={{ resize: 'vertical', minHeight: '140px' }}
                    ></textarea>
                  </div>

                  <button type="submit" className="contact-submit-outline-btn">
                    <FiSend size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

            </div>

          </motion.div>

        </div>
      </section>
    </>
  );
}
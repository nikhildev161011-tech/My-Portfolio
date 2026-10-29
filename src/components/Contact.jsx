import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
      icon: <FaGithub size={22} color="#ffffff" />
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
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

          .contact-amoled-section {
            width: 100%;
            padding: 3.5rem 1.5rem 5rem 1.5rem;
            background-color: #000000;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
            overflow: hidden;
          }

          .contact-amoled-card {
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

          .contact-amoled-card:hover {
            border-color: rgba(255, 103, 31, 0.35);
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(255, 103, 31, 0.08);
          }

          .contact-luxury-heading {
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

          .contact-lead-text {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 1.05rem;
            color: #cbd5e1;
            line-height: 1.75;
            margin: 0;
            font-weight: 500;
          }

          .contact-saffron-label {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 0.85rem;
            font-weight: 800;
            color: #ff671f;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .contact-social-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            background: rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 14px;
            text-decoration: none;
            cursor: pointer;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
            transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;
          }

          .contact-social-btn:hover {
            transform: translateY(-2px) scale(1.05);
            border-color: rgba(255, 103, 31, 0.5);
            background: rgba(255, 103, 31, 0.08);
            box-shadow: 0 8px 22px rgba(255, 103, 31, 0.2);
          }

          .contact-form-glass-box {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            padding: 2rem;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
          }

          .contact-input-field {
            width: 100%;
            padding: 13px 16px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.5);
            color: #ffffff;
            font-size: 0.95rem;
            font-family: 'Plus Jakarta Sans', sans-serif;
            box-sizing: border-box;
            outline: none;
            transition: border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
          }

          .contact-input-field::placeholder {
            color: #64748b;
          }

          .contact-input-field:focus {
            border-color: rgba(255, 103, 31, 0.6);
            background: rgba(0, 0, 0, 0.7);
            box-shadow: 0 0 0 3px rgba(255, 103, 31, 0.15);
          }

          .contact-submit-liquid-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            width: 100%;
            padding: 0.85rem 1.6rem;
            background: rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            color: #e2e8f0;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 14px;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 700;
            font-size: 0.95rem;
            letter-spacing: 0.01em;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.15);
            transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, color 0.25s ease;
            cursor: pointer;
            box-sizing: border-box;
          }

          .contact-submit-liquid-btn:hover {
            transform: translateY(-2px);
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.25);
            color: #ffffff;
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.7);
          }

          @media (max-width: 768px) {
            .contact-amoled-section {
              padding: 2rem 1rem 3.5rem 1rem !important;
            }
            .contact-amoled-card {
              padding: 1.85rem 1.25rem;
              border-radius: 20px;
            }
            .contact-luxury-heading {
              font-size: clamp(1.85rem, 7.5vw, 2.5rem);
            }
            .arrow-track-wrapper {
              max-width: 220px;
            }
            .contact-form-glass-box {
              padding: 1.5rem 1.25rem;
            }
          }
        `}
      </style>

      <section id="contact" className="contact-amoled-section">
        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2.5rem' 
        }}>
          
          <motion.div 
            className="contact-amoled-card"
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative', zIndex: 1 }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', position: 'relative' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.06em', color: '#ff671f', textTransform: 'uppercase' }}>
                  Get In Touch
                </span>

                <motion.h2 
                  className="contact-luxury-heading"
                  variants={headerEntranceVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  Contact Me
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

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '2.5rem',
                alignItems: 'start'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                  <p className="contact-lead-text">
                    Have an exciting project idea, internship opportunity, or just want to chat about tech and DSA? Feel free to reach out directly!
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <span className="contact-saffron-label">
                      Connect Across Platforms
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                      {socialLinks.map((item, index) => (
                        <a 
                          key={index}
                          href={item.link} 
                          target={item.title === "Email" ? "_self" : "_blank"} 
                          rel="noopener noreferrer" 
                          className="contact-social-btn" 
                          title={item.title}
                        >
                          {item.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="contact-form-glass-box">
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      <label className="contact-saffron-label">Your Name</label>
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

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      <label className="contact-saffron-label">Your Email</label>
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

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      <label className="contact-saffron-label">Message</label>
                      <textarea 
                        name="message" 
                        required 
                        rows="5" 
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message" 
                        className="contact-input-field" 
                        style={{ resize: 'vertical', minHeight: '130px' }}
                      ></textarea>
                    </div>

                    <button type="submit" className="contact-submit-liquid-btn">
                      <FiSend size={16} />
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}

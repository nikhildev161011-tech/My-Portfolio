import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const nameString = "Nikhil Gupta";
  const letters = nameString.split("");

  const typewriterTitles = [
    "Software Engineering Aspirant",
    "Full-Stack Developer & Problem Solver",
    "BCA Student @ IGNOU",
    "Learning C++ & DSA"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = typewriterTitles[textIndex];

    if (!isDeleting && subIndex === currentString.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % typewriterTitles.length);
      return;
    }

    const typingSpeed = isDeleting ? 30 : 65;
    const timer = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [subIndex, isDeleting, textIndex]);

  const luxuryEase = [0.16, 1, 0.3, 1];

  const titleContainerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: luxuryEase,
        staggerChildren: 0.03,
        delayChildren: 0.05
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: luxuryEase
      }
    }
  };

  const typewriterVariants = {
    hidden: { opacity: 0, x: -45 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.15,
        ease: luxuryEase
      }
    }
  };

  const buttonGroupVariants = {
    hidden: { opacity: 0, x: -45 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.85,
        delay: 0.25,
        ease: luxuryEase
      }
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

          .hero-amoled-viewport {
            position: relative;
            width: 100%;
            min-height: 86vh;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 4.5rem 3rem 4.5rem 4rem;
            box-sizing: border-box;
            background-color: #000000;
            overflow: hidden;
            transform: translateZ(0);
          }

          .hero-bg-photo-layer {
            position: absolute;
            top: 0;
            right: 0;
            width: 48vw;
            height: 100%;
            background-image: url('/dev.png');
            background-size: cover;
            background-position: center 26%;
            background-repeat: no-repeat;
            image-rendering: auto;
            pointer-events: none;
            z-index: 1;
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
            will-change: transform;
          }

          .hero-scrim-curtain {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              90deg,
              #000000 0%,
              #000000 36%,
              rgba(0, 0, 0, 0.98) 46%,
              rgba(0, 0, 0, 0.90) 54%,
              rgba(0, 0, 0, 0.72) 64%,
              rgba(0, 0, 0, 0.48) 74%,
              rgba(0, 0, 0, 0.22) 84%,
              rgba(0, 0, 0, 0.05) 94%,
              transparent 100%
            ),
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.5) 0%,
              transparent 22%,
              transparent 78%,
              #000000 100%
            );
            pointer-events: none;
            z-index: 2;
          }

          .hero-diffuse-glow {
            position: absolute;
            top: 30%;
            left: 12%;
            width: 480px;
            height: 480px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 103, 31, 0.08) 0%, transparent 68%);
            pointer-events: none;
            z-index: 2;
            filter: blur(75px);
          }

          .hero-content-frame {
            position: relative;
            z-index: 3;
            max-width: 1250px;
            width: 100%;
            margin: 0;
            display: flex;
            justify-content: flex-start;
          }

          .hero-text-stack {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.4rem;
            max-width: 560px;
          }

          .hero-luxury-headline {
            font-family: 'Syne', sans-serif;
            font-size: clamp(2.6rem, 5.2vw, 4.8rem);
            font-weight: 800;
            line-height: 1.05;
            letter-spacing: -0.04em;
            margin: 0;
            display: flex;
            overflow: hidden;
            background: linear-gradient(180deg, #ffffff 20%, #cbd5e1 60%, #1e293b 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 10px 30px rgba(255, 255, 255, 0.04);
            white-space: nowrap;
          }

          .hero-typewriter-text {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: clamp(1.15rem, 2.3vw, 1.55rem);
            font-weight: 700;
            line-height: 1.4;
            letter-spacing: -0.02em;
            margin: 0;
            min-height: 1.7em;
            background: linear-gradient(180deg, #ffffff 15%, #cbd5e1 65%, #64748b 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: flex;
            align-items: center;
          }

          .hero-buttons-cluster {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-top: 0.4rem;
            flex-wrap: nowrap;
          }

          .hero-liquid-glass-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            padding: 0.78rem 1.6rem;
            background: rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            color: #e2e8f0;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 14px;
            text-decoration: none;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 700;
            font-size: 0.92rem;
            letter-spacing: 0.01em;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.15);
            transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, box-shadow 0.25s ease;
            white-space: nowrap;
            cursor: pointer;
          }

          .hero-liquid-glass-btn:hover {
            transform: translateY(-2px);
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.25);
            color: #ffffff;
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.7);
          }

          /* Refined Mobile View: Clear Face and Shirt Visibility */
          @media (max-width: 850px) {
            .hero-amoled-viewport {
              min-height: 92vh;
              padding: 4.5rem 1.5rem 4rem 1.5rem;
              justify-content: center;
              align-items: flex-end;
            }
            .hero-bg-photo-layer {
              width: 100%;
              height: 68%;
              top: 0;
              right: 0;
              background-position: center 10%;
              background-size: cover;
              -webkit-mask-image: linear-gradient(
                to bottom,
                black 0%,
                black 55%,
                rgba(0, 0, 0, 0.85) 72%,
                rgba(0, 0, 0, 0.35) 88%,
                transparent 100%
              );
              mask-image: linear-gradient(
                to bottom,
                black 0%,
                black 55%,
                rgba(0, 0, 0, 0.85) 72%,
                rgba(0, 0, 0, 0.35) 88%,
                transparent 100%
              );
            }
            .hero-scrim-curtain {
              background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.02) 0%,
                transparent 30%,
                rgba(0, 0, 0, 0.40) 65%,
                rgba(0, 0, 0, 0.88) 82%,
                #000000 100%
              );
            }
            .hero-content-frame {
              justify-content: center;
              margin: 0 auto;
            }
            .hero-text-stack {
              align-items: center;
              text-align: center;
              max-width: 100%;
              gap: 1.15rem;
            }
            .hero-luxury-headline {
              font-size: clamp(2.3rem, 9.5vw, 3.5rem);
              justify-content: center;
            }
            .hero-typewriter-text {
              font-size: clamp(1.05rem, 4.4vw, 1.25rem);
              justify-content: center;
            }
            .hero-buttons-cluster {
              justify-content: center;
              width: 100%;
              max-width: 360px;
              gap: 0.75rem;
            }
            .hero-liquid-glass-btn {
              flex: 1;
              padding: 0.72rem 0.95rem;
              font-size: 0.84rem;
              gap: 6px;
            }
            .hero-liquid-glass-btn svg {
              width: 14px;
              height: 14px;
            }
          }
        `}
      </style>

      <section id="home" className="hero-amoled-viewport">
        <div className="hero-bg-photo-layer" />
        <div className="hero-scrim-curtain" />
        <div className="hero-diffuse-glow" />

        <div className="hero-content-frame">
          <div className="hero-text-stack">

            <motion.h1
              className="hero-luxury-headline"
              variants={titleContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
            >
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  style={{
                    display: 'inline-block',
                    whiteSpace: char === " " ? "pre" : "normal"
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.h2
              className="hero-typewriter-text"
              variants={typewriterVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
            >
              {typewriterTitles[textIndex].substring(0, subIndex)}
            </motion.h2>

            <motion.div
              className="hero-buttons-cluster"
              variants={buttonGroupVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
            >
              <a href="#projects" className="hero-liquid-glass-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                <span>Explore Projects</span>
              </a>

              <a href="#resume" className="hero-liquid-glass-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <span>View Resume</span>
              </a>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projectsList = [
    {
      title: "Money Tracker",
      description: "A secure and intuitive financial web application to track daily expenses, manage budgets, and monitor savings effortlessly.",
      tags: ["React", "Node.js", "MongoDB Atlas", "PWA"],
      image: "/moneytracker.png",
      viewLink: "https://money-tracker-frontend-lilac.vercel.app/"
    },
    {
      title: "DevCart",
      description: "A modern e-commerce web platform built for developers, featuring seamless product browsing, cart management, and secure checkout simulation.",
      tags: ["React", "Express", "Tailwind CSS", "REST API"],
      image: "/devcart.png",
      viewLink: "https://ecommerce-frontend-ivory-rho.vercel.app/"
    },
    {
      title: "PCIMT",
      description: "An advanced institutional web portal designed for efficient academic management, student tracking, and resource sharing.",
      tags: ["Full Stack", "Node.js", "Express", "MongoDB"],
      image: "/pcimt.png.png",
      viewLink: "https://pcimt-frontend-qhhv.vercel.app/"
    }
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');

          .bold-cursive-heading {
            font-family: 'Caveat', cursive;
            font-size: clamp(2.5rem, 6vw, 4rem);
            font-weight: 700;
            color: #0f172a;
            line-height: 1.1;
            letter-spacing: 0.02em;
          }

          .project-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 20px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .project-card:hover {
            transform: translateY(-6px);
            border-color: #2563eb;
            box-shadow: 0 20px 40px rgba(37, 99, 235, 0.12);
          }

          .project-image-wrapper {
            width: 100%;
            height: 190px;
            overflow: hidden;
            background-color: #f1f5f9;
            border-bottom: 1px solid #e2e8f0;
          }
          .project-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
          }
          .project-card:hover .project-image {
            transform: scale(1.05);
          }

          .project-tag {
            font-size: 0.75rem;
            font-weight: 700;
            color: #2563eb;
            background-color: #eff6ff;
            padding: 4px 10px;
            border-radius: 6px;
            border: 1px solid #bfdbfe;
          }

          .view-project-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            font-size: 0.9rem;
            font-weight: 700;
            color: #ffffff;
            background-color: #2563eb;
            padding: 10px 16px;
            border-radius: 12px;
            text-decoration: none;
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
            transition: all 0.2s ease;
          }
          .view-project-btn:hover {
            background-color: #1d4ed8;
            transform: translateY(-2px);
            box-shadow: 0 6px 18px rgba(37, 99, 235, 0.35);
          }

          @media (max-width: 768px) {
            .projects-section {
              padding: 3rem 1rem !important;
            }
          }
        `}
      </style>

      <section id="projects" className="projects-section" style={{ 
        width: '100%', 
        padding: '5rem 1.5rem', 
        backgroundColor: '#f8fafc',
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
            style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', position: 'relative' }}
          >
            <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '-0.02em', color: '#2563eb', textTransform: 'uppercase' }}>
              Crafted Work & Web Applications
            </span>
            <h2 className="bold-cursive-heading" style={{ margin: 0 }}>
              Projects
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)', borderRadius: '2px', marginTop: '4px' }}></div>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {projectsList.map((project, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                className="project-card"
              >
                
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, justifyContent: 'space-between' }}>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>
                      {project.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.6', margin: 0, fontWeight: '500' }}>
                      {project.description}
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
                      <a href={project.viewLink} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        View {project.title}
                      </a>
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

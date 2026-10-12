import React from 'react';

export default function About() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');

          /* Stylish Cursive / Signature Font */
          .stylish-cursive {
            font-family: 'Caveat', cursive;
            font-size: 1.5rem;
            font-weight: 700;
            letter-spacing: 0.04em;
            color: #2563eb;
            display: inline-block;
          }

          /* Bold Cursive Headings */
          .bold-cursive-heading {
            font-family: 'Caveat', cursive;
            font-size: clamp(2.5rem, 6vw, 4rem);
            font-weight: 700;
            color: #0f172a;
            line-height: 1.1;
            letter-spacing: 0.02em;
          }

          /* Google Multi-Color Styling */
          .google-g { color: #4285F4; }
          .google-o1 { color: #EA4335; }
          .google-o2 { color: #FBBC05; }
          .google-g2 { color: #4285F4; }
          .google-l { color: #34A853; }
          .google-e { color: #EA4335; }

          @media (max-width: 768px) {
            .about-section {
              padding: 3rem 1rem !important;
            }
          }
        `}
      </style>

      {/* About Section Container with id="about" */}
      <section id="about" className="about-section" style={{ 
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
          gap: '3.5rem' 
        }}>
          
          {/* Part 1: About Me Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Header with Bold Cursive & Underline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', position: 'relative' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '-0.02em', color: '#2563eb', textTransform: 'uppercase' }}>
                Introduction
              </span>
              <h2 className="bold-cursive-heading" style={{ margin: 0 }}>
                About Me
              </h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)', borderRadius: '2px', marginTop: '4px' }}></div>
            </div>

            {/* Content Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2.5rem', 
              alignItems: 'center' 
            }}>
              
              {/* Left Column: Custom Bio with Google Branding */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.7', margin: 0, fontWeight: '500' }}>
                  Currently learning foundational computer science and preparing to crack top-tier tech companies like <span style={{ fontWeight: '800' }}><span className="google-g">G</span><span className="google-o1">o</span><span className="google-o2">o</span><span className="google-g2">g</span><span className="google-l">l</span><span className="google-e">e</span></span>. I focus on core problem-solving while actively shipping useful full-stack web applications.
                </p>
                <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                  I build full-stack web applications as Progressive Web Apps (PWA), handling both responsive frontend interfaces and robust backend logic.
                </p>
              </div>

              {/* Right Column: Clean Text Layout */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                {/* Learning Path */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <h4 style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Learning Path</h4>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap' }}>
                    <span className="stylish-cursive" style={{ fontSize: '1.6rem' }}>Data Structures & Algorithms</span>
                    <span style={{ color: '#94a3b8', fontWeight: '600' }}>&bull;</span>
                    <span className="stylish-cursive" style={{ fontSize: '1.6rem' }}>C++</span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <h4 style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tech Stack</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.25rem', alignItems: 'center', marginTop: '0.25rem' }}>
                    <span className="stylish-cursive">HTML</span>
                    <span className="stylish-cursive">CSS</span>
                    <span className="stylish-cursive">React</span>
                    <span className="stylish-cursive">Node.js</span>
                    <span className="stylish-cursive">MongoDB Atlas</span>
                  </div>
                </div>

                {/* Featured Project Type */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <h4 style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Featured Project Type</h4>
                  <p style={{ margin: 0, fontSize: '1.15rem', color: '#0f172a', fontWeight: '800' }}>Progressive Web Application</p>
                </div>

              </div>

            </div>

          </div>


          {/* Part 2: Cricket & Mindset Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '3rem' }}>
            
            {/* Header with Bold Cursive & Underline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', position: 'relative' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '-0.02em', color: '#2563eb', textTransform: 'uppercase' }}>
                Beyond The Screen
              </span>
              <h2 className="bold-cursive-heading" style={{ margin: 0 }}>
                Cricket & Mindset
              </h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)', borderRadius: '2px', marginTop: '4px' }}></div>
            </div>

            {/* Cricket Story & Professional Connection */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.7', margin: 0, fontWeight: '500' }}>
                Growing up, my absolute ultimate dream was to become a professional cricketer. I never initially planned to enter the tech space; cricket was my core passion and first love. However, life steered me toward building software, creating web apps, and solving complex problems through code.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.7', margin: 0 }}>
                While cricket remains an integral part of who I am and my lifelong passion, software engineering has become my core profession. The discipline, resilience under pressure, and team spirit I learned on the cricket field directly shape my programming mindset today—helping me write clean code, handle high-stakes debugging, and build robust digital experiences.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
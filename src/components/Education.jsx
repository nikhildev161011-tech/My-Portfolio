import React from 'react';

export default function Education() {
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

          .edu-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .edu-card:hover {
            transform: translateY(-4px);
            border-color: #2563eb;
            box-shadow: 0 15px 35px rgba(37, 99, 235, 0.1);
          }

          .map-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 0.9rem;
            color: #2563eb;
            font-weight: 700;
            text-decoration: none;
            transition: color 0.2s ease;
          }
          .map-link:hover {
            color: #1d4ed8;
            text-decoration: underline;
          }

          @media (max-width: 768px) {
            .edu-card {
              padding: 1.25rem;
            }
          }
        `}
      </style>

      {/* Education Section Container with id="education" */}
      <section id="education" style={{ 
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
          
          {/* Section Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', position: 'relative' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '-0.02em', color: '#2563eb', textTransform: 'uppercase' }}>
              Academic Background
            </span>
            <h2 className="bold-cursive-heading" style={{ margin: 0 }}>
              Education
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)', borderRadius: '2px', marginTop: '4px' }}></div>
          </div>

          {/* Education Card */}
          <div className="edu-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.25rem 0' }}>
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#2563eb', fontWeight: '700', margin: 0 }}>
                  Indira Gandhi National Open University (IGNOU)
                </p>
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#64748b', backgroundColor: '#f1f5f9', padding: '6px 12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                2026 – Present
              </span>
            </div>

            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.6', margin: '0 0 1.25rem 0', fontWeight: '500' }}>
              Pursuing foundational computer science, core programming, and software engineering principles.
            </p>

            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Microtek+College+of+Management+and+Technology+Maldahiya+Varanasi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="map-link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Study Centre: Microtek College of Management & Technology (View on Map)</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
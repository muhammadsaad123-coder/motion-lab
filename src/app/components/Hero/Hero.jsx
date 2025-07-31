import Image from "next/image";
import "./Hero.css"; // 👈 CSS file

export default function Home() {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <Image
        src="/images/herobg.jpg"
        alt="Hero background"
        fill
        className="hero-bg"
        priority
      />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-wrapper">
        <div className="hero-container">
          <div className="hero-inner">
            {/* Left Content */}
            <div className="hero-left">
              <div className="hero-content">
                <p className="hero-badge">100% Satisfaction Guarantee</p>

                <h1 className="hero-title">
                  Learn <span className="highlight">Skills</span> From <br />
                  Our Top Instructors
                </h1>

                <p className="hero-description">
                  Borem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. Borem ipsum dolor sit amet consectetur adipiscing area we followelit.
                </p>

                <div className="hero-cta">
                  <button className="cta-button">EXPLORE COURSES →</button>
                  <div className="cta-phone">
                    <svg className="phone-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.91 19.91 0 0 1-8.63-3.13 
                      19.75 19.75 0 0 1-6-6 19.91 19.91 0 0 1-3.13-8.67A2 
                      2 0 0 1 4.09 2h3a2 2 0 0 1 2 1.72c.2 1.38.6 2.72 
                      1.18 3.95a2 2 0 0 1-.45 2.18l-1.27 1.27a16 16 
                      0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.18-.45 
                      17.29 17.29 0 0 0 3.95 1.18A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <div className="phone-text">
                      <p className="phone-sub">Have any Question?</p>
                      <p className="phone-number">993-00-67777</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="hero-right">
              <div className="hero-image-wrapper">
                <Image
                  src="/images/hero.png"
                  alt="Hero Instructor"
                  width={600}
                  height={600}
                  className="hero-image"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

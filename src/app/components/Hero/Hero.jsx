import Image from "next/image";
import "./Hero.css"; 

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
  Learn <span className="highlight underline-svg">Skills 
    <svg
      className="underline"
      viewBox="0 0 145 25"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        className="underline-path"
      />
      <path
        d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="underline-path delay"
      />
    </svg>
  </span>{" "}
  
  From
  <br />
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
                      <p className="phone-number">0335-9765391</p>
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

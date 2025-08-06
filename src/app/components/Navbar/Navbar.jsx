"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import "./Navbar.css";
import { Lexend_Deca } from "next/font/google";

const lexend = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`navbar ${lexend.className}`}>
      {/* Logo */}
      <div className="navbar__logo">
        <Image src="/images/lablogo.png" alt="Motions Lab Logo" width={210} height={80} />
      </div>

      {/* Center Menu */}
      <ul className={`navbar__menu ${isMenuOpen ? "navbar__menu--active" : ""}`}>
        {[
          { label: "Home", links: [{ text: "Home One", href: "/" }, { text: "Home Two", href: "/" }] },
          
         {
  label: "Courses",
  links: [
    
   { text: "Map Animation", href: "/#map-animation" },
    { text: "Documentary Style Editing", href: "/#documentary-style-editing" },
    { text: "Reels Editing", href: "/#reels-editing" },
    { text: "YouTube Automation", href: "/#youtube-automation" },
    { text: "Freelancing", href: "/#freelancing" }
  ]
},
          { label: "Services", links: [{ text: "All Courses", href: "/courses" }, { text: "Categories", href: "/categories" }] },
          { label: "Portfolios", links: [{ text: "Shop Main", href: "/shop" }, { text: "Cart", href: "/cart" }] },
         
        ].map((item, idx) => (
          <li className="dropdown" key={idx}>
            <span className="dropdown-toggle">
              {item.label} <ChevronDown className="dropdown-icon" />
            </span>
            <ul className="dropdown-menu">
              {item.links.map((link, i) => (
                <li key={i}><a href={link.href}>{link.text}</a></li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {/* Right Side */}
      <div className="navbar__right">
        <button className="login-button">Log In</button>
        <div className="navbar__hamburger" onClick={toggleMenu}>
          {isMenuOpen ? "×" : "☰"}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

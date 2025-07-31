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
        <Image src="/images/lablogo.png" alt="Motions Lab Logo" width={160} height={50} />
      </div>

      {/* Center Menu */}
      <ul className={`navbar__menu ${isMenuOpen ? "navbar__menu--active" : ""}`}>
        {[
          { label: "Home", links: [{ text: "Home One", href: "/" }, { text: "Home Two", href: "/" }] },
          { label: "Courses", links: [{ text: "All Courses", href: "/courses" }, { text: "Categories", href: "/categories" }] },
          { label: "Pages", links: [{ text: "About Us", href: "/about" }, { text: "Our Team", href: "/team" }] },
          { label: "Shop", links: [{ text: "Shop Main", href: "/shop" }, { text: "Cart", href: "/cart" }] },
          { label: "Blog", links: [{ text: "Blog Posts", href: "/blog" }, { text: "Single Post", href: "/blog/single" }] },
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

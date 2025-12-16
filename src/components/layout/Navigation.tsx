// src/components/Navigation.tsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onScrollToSection: (id: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onScrollToSection,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    "Home",
    "Skills",
    "Projects",
    "Education",
    "Experience",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 flex items-center px-[5%] z-50 bg-dark/80 backdrop-blur-md border-b border-white/5 animate-slide-down">
      <div className="max-w-[1400px] w-full mx-auto flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-mono text-2xl font-bold text-primary tracking-tighter hover:opacity-80 transition-opacity"
        >
          &lt;VK /&gt;
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 list-none items-center">
          {menuItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => onScrollToSection(item.toLowerCase())}
                className="text-sm cursor-pointer font-mono text-text/80 hover:text-primary transition-colors duration-300 uppercase tracking-wider"
              >
                <span className="text-primary mr-1">
                  0{menuItems.indexOf(item) + 1}.
                </span>
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text hover:text-primary transition-colors"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-dark/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {menuItems.map((item, idx) => (
          <button
            key={item}
            onClick={() => {
              onScrollToSection(item.toLowerCase());
              setIsMenuOpen(false);
            }}
            className="text-2xl font-mono font-bold text-text hover:text-primary transition-colors"
          >
            <span className="text-primary text-base mr-2">0{idx + 1}.</span>
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

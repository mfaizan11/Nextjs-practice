"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); 
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  if (!mounted) {
    return null; 
  }

  return (
    <nav className="flex items-center max-w-[1200px] mx-auto my-2 rounded-2xl  justify-between px-8 py-4 bg-white shadow-md relative">
      <div className="text-black">
        logo
      </div>

      
      <div className="cursor-pointer z-20" onClick={toggleMenu}>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </div>

      
      <ul className={`flex flex-col gap-4 absolute top-full left-0 w-full bg-white p-4 shadow-md transition-all duration-300
                      ${menuOpen ? 'flex' : 'hidden'}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

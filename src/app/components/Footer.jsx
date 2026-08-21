import React from "react";

const Footer = () => {
  return (
    <footer className="footer border-t border-[#00ff88] bg-[#0a0a0f] text-white font-mono z-10 relative mt-auto shadow-[0_-5px_15px_rgba(0,255,136,0.1)]">
      <div className="container mx-auto p-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm tracking-widest text-[#00ff88]">
        <span className="opacity-80">
          [ SYSTEM VERSION 2.0.26 ]
        </span>
        <div className="flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
          <span>PORTFOLIO</span>
          <p className="mt-1">
            &copy; 2026 DISHANT SHARMA
          </p>
        </div>
        <span className="opacity-80 hidden md:block">
          [ ENCRYPTION: 256-BIT SECURE ]
        </span>
      </div>
    </footer>
  );
};

export default Footer;

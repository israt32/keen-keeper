import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1e463a] text-white py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="container mx-auto flex flex-col items-center">
        
        {/* Brand Logo */}
        <h2 className="text-4xl font-bold tracking-tight mb-4 select-none">
          KeenKeeper
        </h2>

        {/* Tagline text */}
        <p className="text-slate-300 text-sm sm:text-base max-w-xl text-center font-normal leading-relaxed mb-8 opacity-80">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links Section */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <span className="text-xs tracking-wider uppercase font-semibold text-slate-300 opacity-90">
            Social Links
          </span>
          <div className="flex gap-4">
            
            {/* Instagram - Inline SVG */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1e463a] hover:bg-slate-100 transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* Facebook - Inline SVG */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1e463a] hover:bg-slate-100 transition-colors duration-200"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>

            {/* X / Twitter - Inline SVG */}
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1e463a] hover:bg-slate-100 transition-colors duration-200"
              aria-label="X (formerly Twitter)"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-white/10 my-6" />

        {/* Bottom Bar Details */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-300 opacity-75">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-6">
            <a href="/privacy" className="hover:underline hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:underline hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:underline hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
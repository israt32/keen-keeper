import React from 'react';
// Using lucide-react icons that match the sleek, uniform layout perfectly
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1e463a] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
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
            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1e463a] hover:bg-slate-100 transition-colors duration-200"
            >
              <Instagram size={20} strokeWidth={2} />
            </a>

            {/* Facebook */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1e463a] hover:bg-slate-100 transition-colors duration-200"
            >
              <Facebook size={20} strokeWidth={2} fill="currentColor" />
            </a>

            {/* X / Twitter */}
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1e463a] hover:bg-slate-100 transition-colors duration-200"
            >
              {/* Uses Twitter layout structure layout perfectly */}
              <Twitter size={20} strokeWidth={2} fill="currentColor" />
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
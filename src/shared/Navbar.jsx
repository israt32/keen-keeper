import React, { useState } from 'react';
// If using react-icons: import { BiHomeAlt, BiHistory, BiLineChart } from 'react-icons/bi';
// Below uses lucide-react which matches the thin, clean style in your image perfectly:
import { Home, Clock, BarChart3, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'Timeline', icon: Clock },
    { name: 'Stats', icon: BarChart3 },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm mb-20">
      {/* Top Blue Accent Line exactly like the design */}
  

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold tracking-tight text-slate-800">
              Keen<span className="text-[#1e463a]">Keeper</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;
              
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all duration-200
                    ${isActive 
                      ? 'bg-[#244d40] text-white' 
                      : 'text-slate-600 hover:bg-gray-50 hover:text-slate-900'
                    }`}
                >
                  <Icon size={18} strokeWidth={isActive ? 2.5 : 1.8} />
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <button
                key={item.name}
                onClick={() => {
                  setActiveTab(item.name);
                  setIsOpen(false); // Close menu on click
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-md text-base font-medium transition-colors
                  ${isActive 
                    ? 'bg-[#244d40] text-white' 
                    : 'text-slate-600 hover:bg-gray-50'
                  }`}
              >
                <Icon size={20} />
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

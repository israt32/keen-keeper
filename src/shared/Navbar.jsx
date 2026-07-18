import React, { useState } from 'react';
// 1. Import NavLink from react-router-dom
import { NavLink } from 'react-router-dom';
import { Home, Clock, BarChart3, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // 2. Add routes (paths) to your items array
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Timeline', path: '/timeline', icon: Clock },
    { name: 'Stats', path: '/stats', icon: BarChart3 },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm mb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Brand Link */}
          <NavLink to="/" className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold tracking-tight text-slate-800">
              Keen<span className="text-[#1e463a]">Keeper</span>
            </span>
          </NavLink>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              
              return (
                // 3. Changed button to NavLink
                <NavLink
                  key={item.name}
                  to={item.path}
                  // NavLink provides an `isActive` boolean value inside its class property callback function
                  className={({ isActive }) => 
                    `flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all duration-200
                    ${isActive 
                      ? 'bg-[#244d40] text-white' 
                      : 'text-slate-600 hover:bg-gray-50 hover:text-slate-900'
                    }`
                  }
                >
                  {/* We can track active parameters manually inside elements if needed */}
                  {({ isActive }) => (
                    <>
                      <Icon size={18} strokeWidth={isActive ? 2.5 : 1.8} />
                      {item.name}
                    </>
                  )}
                </NavLink>
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

            return (
              // 4. Changed mobile button to NavLink
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)} // Closes drawer menu layout on link selection
                className={({ isActive }) => 
                  `flex items-center gap-3 w-full px-4 py-3 rounded-md text-base font-medium transition-colors
                  ${isActive 
                    ? 'bg-[#244d40] text-white' 
                    : 'text-slate-600 hover:bg-gray-50'
                  }`
                }
              >
                <Icon size={20} />
                {item.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
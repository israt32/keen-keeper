import React from 'react';
import { Home, ArrowLeft, RefreshCw, HelpCircle } from 'lucide-react';

const ErrorPage = () => {
  // Simple handler to refresh the page if it's a temporary glitch
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center px-6 relative overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#244d40]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0087e0]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full text-center z-10">
        {/* Animated Error Illustration */}
        <div className="relative mb-8 group">
          <h1 className="text-9xl font-black tracking-widest text-slate-200 select-none transition-transform duration-300 group-hover:scale-105">
            404
          </h1>
          <div className="absolute inset-0 flex justify-center items-center top-4">
            <span className="bg-[#244d40] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded shadow-md transform -rotate-12 transition-transform duration-300 group-hover:rotate-0">
              Page Not Found
            </span>
          </div>
        </div>

        {/* Error Messages */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 tracking-tight">
          Lost in the matrix?
        </h2>
        <p className="text-slate-500 mb-8 max-w-sm mx-auto leading-relaxed">
          The page you are looking for doesn't exist, has been moved, or is temporarily unavailable. 
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-all duration-200"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
          
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-[#244d40] text-white font-medium rounded-lg shadow-sm hover:bg-[#1b3b31] transition-all duration-200"
          >
            <Home size={18} />
            Back to Home
          </button>
        </div>

        {/* Secondary Troubleshooting Links */}
        <div className="border-t border-slate-200 pt-6 flex justify-center gap-6 text-sm">
          <button 
            onClick={handleRefresh}
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#0087e0] transition-colors"
          >
            <RefreshCw size={14} />
            Retry Link
          </button>
          <a 
            href="/support" 
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#244d40] transition-colors"
          >
            <HelpCircle size={14} />
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
import React from 'react';
import { Plus } from 'lucide-react';

const FriendsBanner = () => {
  
  const stats = [
    { value: '10', label: 'Total Friends' },
    { value: '3', label: 'On Track' },
    { value: '6', label: 'Need Attention' },
    { value: '12', label: 'Interactions This Month' },
  ];

  return (
    <section className="w-full  pb-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        
       
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Friends to keep close in your life
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed mb-6">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
          
         
          <button className="inline-flex items-center gap-1.5 bg-[#1e463a] hover:bg-[#153128] text-white text-sm font-medium px-4 py-2 rounded shadow-sm transition-colors duration-200">
            <Plus size={16} strokeWidth={2.5} />
            Add a Friend
          </button>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center transition-all duration-200 hover:shadow-md"
            >
              <span className="text-3xl sm:text-4xl font-bold text-[#1e463a] tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-500 whitespace-nowrap">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>

    <div className="divider"></div>

    </section>
  );
};

export default FriendsBanner;
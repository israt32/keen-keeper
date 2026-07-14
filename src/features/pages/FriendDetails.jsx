import React, { use } from 'react';
import { useParams } from 'react-router';

const freindPromise = fetch('/friendsData.json').then(res=> res.json())

const FriendDetails = () => {
  const friends = use(freindPromise)
  // console.log(friends)
  const params = useParams()
  // console.log(params, 'param')
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-[#f8fafc]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left Column: Profile Card & Action List */}
        <div className="space-y-4">
          {/* Main Info Card */}
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border border-slate-100 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=256&h=256&fit=crop" 
                alt="Emma Wilson" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h2 className="text-xl font-bold text-slate-800 tracking-tight mb-2">Emma Wilson</h2>
            
            {/* Badges */}
            <div className="flex flex-col gap-1.5 items-center mb-4">
              <span className="px-2.5 py-0.5 bg-[#fee2e2] text-[#ef4444] text-[10px] font-bold tracking-wide rounded-full uppercase">
                Overdue
              </span>
              <span className="px-2.5 py-0.5 bg-[#d1fae5] text-[#059669] text-[10px] font-bold tracking-wide rounded-full uppercase">
                Family
              </span>
            </div>

            {/* Notes & Preferences */}
            <p className="text-sm italic text-slate-500 font-medium mb-1">
              "Former colleague, great mentor"
            </p>
            <p className="text-xs text-slate-400">
              Preferred: <span className="font-medium text-slate-500">email</span>
            </p>
          </div>

          {/* Action Button Row Group */}
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden flex flex-col divide-y divide-slate-100">
            {/* Snooze */}
            <button className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Snooze 2 Weeks
            </button>
            
            {/* Archive */}
            <button className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
              Archive
            </button>

            {/* Delete */}
            <button className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-red-500 hover:bg-red-50/50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              Delete
            </button>
          </div>
        </div>

        {/* Right Column: Analytics Metrics & Actions Panels */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Top 3 Stat Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Stat 1 */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 text-center">
              <span className="block text-3xl font-bold text-[#1e463a] mb-1">62</span>
              <span className="text-xs font-semibold text-slate-400 tracking-wide">Days Since Contact</span>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 text-center">
              <span className="block text-3xl font-bold text-[#1e463a] mb-1">30</span>
              <span className="text-xs font-semibold text-slate-400 tracking-wide">Goal (Days)</span>
            </div>

            {/* Stat 3 */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 text-center">
              <span className="block text-2xl font-bold text-[#1e463a] mb-2 pt-0.5">Feb 27, 2026</span>
              <span className="text-xs font-semibold text-slate-400 tracking-wide">Next Due</span>
            </div>
          </div>

          {/* Relationship Goal Box */}
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-bold text-[#1e463a]">Relationship Goal</h3>
              <button className="px-3 py-1 text-xs font-semibold border border-slate-200 hover:bg-slate-50 rounded text-slate-600 transition-colors">
                Edit
              </button>
            </div>
            <p className="text-sm text-slate-500">
              Connect every <span className="font-bold text-slate-800">30 days</span>
            </p>
          </div>

          {/* Quick Check-In Box */}
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
            <h3 className="text-base font-bold text-[#1e463a] mb-4">Quick Check-In</h3>
            
            <div className="grid grid-cols-3 gap-4">
              {/* Call */}
              <button className="flex flex-col items-center justify-center gap-2 py-4 px-2 bg-slate-50 border border-slate-100 hover:bg-slate-100/70 rounded-xl transition-all duration-200">
                <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.147-7.149c-.154-.441.012-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="text-xs font-semibold text-slate-600">Call</span>
              </button>

              {/* Text */}
              <button className="flex flex-col items-center justify-center gap-2 py-4 px-2 bg-slate-50 border border-slate-100 hover:bg-slate-100/70 rounded-xl transition-all duration-200">
                <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
                <span className="text-xs font-semibold text-slate-600">Text</span>
              </button>

              {/* Video */}
              <button className="flex flex-col items-center justify-center gap-2 py-4 px-2 bg-slate-50 border border-slate-100 hover:bg-slate-100/70 rounded-xl transition-all duration-200">
                <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10.5h.008v.008H9V10.5zm6 0h.008v.008H15V10.5z" />
                </svg>
                <span className="text-xs font-semibold text-slate-600">Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
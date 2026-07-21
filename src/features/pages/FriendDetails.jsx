import React, { use, useContext, useState } from "react";
import { Link, useParams } from "react-router";
import { FriendContext } from "../../context/FriendContext";
import { MessageSquareText, Phone, SquarePlay } from "lucide-react";

const freindPromise = fetch("/friendsData.json").then((res) => res.json());



const FriendDetails = () => {
  const friends = use(freindPromise);

  const { id } = useParams();
 
  const friendDetailsShow = friends.find((friend => friend.id == id))

  const {handleCall, handleText, handleVideo} = useContext(FriendContext) 
  

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-[#f8fafc]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

       
        <div className="space-y-4">
        
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border border-slate-100 shadow-sm">
              <img 
                src={friendDetailsShow.picture} 
                alt="Emma Wilson" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h2 className="text-xl font-bold text-slate-800 tracking-tight mb-2">{friendDetailsShow.name}</h2>
            
           
            <div className="flex flex-col gap-1.5 items-center mb-4">
              <span className="px-2.5 py-0.5 bg-[#fee2e2] text-[#ef4444] text-[10px] font-bold tracking-wide rounded-full uppercase">
                {friendDetailsShow.status}
              </span>
              <span >
                {friendDetailsShow.tags.map(tag=> <span className="px-2.5 py-0.5 mr-1 bg-[#d1fae5] text-[#059669] text-[10px] font-bold tracking-wide rounded-full uppercase ">{tag}</span>)}
              </span>
            </div>

            
            <p className="text-sm italic text-slate-500 font-medium mb-1">
              {friendDetailsShow.bio}
            </p>
            <p className="text-xs text-slate-400">
              Preferred: <span className="font-medium text-slate-500">email</span>
            </p>
          </div>

         
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden flex flex-col divide-y divide-slate-100">
           
            <button className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Snooze 2 Weeks
            </button>
            
            
            <button className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
              Archive
            </button>

           
            <button className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-red-500 hover:bg-red-50/50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              Delete
            </button>
          </div>
        </div>

     
        <div className="lg:col-span-2 space-y-6">
          
        
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
           
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 text-center">
              <span className="block text-3xl font-bold text-[#1e463a] mb-1">{friendDetailsShow.days_since_contact}</span>
              <span className="text-[18px]  text-slate-400 tracking-wide">Days Since Contact</span>
            </div>

           
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 text-center">
              <span className="block text-3xl font-bold text-[#1e463a] mb-1">{friendDetailsShow.goal}</span>
              <span className="text-[18px]  text-slate-400 tracking-wide">Goal (Days)</span>
            </div>

           
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 text-center">
              <span className="block text-2xl font-bold text-[#1e463a] mb-2 pt-0.5">{friendDetailsShow.next_due_date}</span>
              <span className="text-[18px]  text-slate-400 tracking-wide">Next Due</span>
            </div>
          </div>

       
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

         
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
            <h3 className="text-base font-bold text-[#1e463a] mb-4">Quick Check-In</h3>
            
            <div className="grid grid-cols-3 gap-4">
            
              
              <Link onClick={()=>handleCall(friendDetailsShow)}  className="flex flex-col items-center justify-center gap-2 py-4 px-2 bg-slate-50 border border-slate-100 hover:bg-slate-100/70 rounded-xl transition-all duration-200">
                <Phone className="text-slate-600" />
                <span className="text-xs font-semibold text-slate-600">Call</span>
              </Link>

            
              <Link onClick={()=>handleText(friendDetailsShow)} className="flex flex-col items-center justify-center gap-2 py-4 px-2 bg-slate-50 border border-slate-100 hover:bg-slate-100/70 rounded-xl transition-all duration-200">
                <MessageSquareText className="text-slate-600" />
                <span className="text-xs font-semibold text-slate-600">Text</span>
              </Link>

           
              <Link onClick={()=>handleVideo(friendDetailsShow)}  className="flex flex-col items-center justify-center gap-2 py-4 px-2 bg-slate-50 border border-slate-100 hover:bg-slate-100/70 rounded-xl transition-all duration-200">
               <SquarePlay className="text-slate-600" />
                <span className="text-xs font-semibold text-slate-600">Video</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;

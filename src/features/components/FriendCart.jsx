import React from 'react';
import { Link } from 'react-router';

const FriendCart = ({friend}) => {
  return (
      <Link  to={`/friendDetails/${friend.id}`} className="w-full bg-white rounded-xl border border-slate-100 shadow-sm p-6 flex flex-col items-center transition-all duration-200 hover:shadow-md">
            {/* Profile Image Container */}
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border border-slate-50 shadow-inner">
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name Typography */}
            <h3 className="text-xl font-bold text-[#1e293b] tracking-tight mb-1">
              {friend.name}
            </h3>

            {/* Time Tracking Stamp */}
            <span className="text-xs font-normal text-slate-400 mb-3">
              <p>{friend.days_since_contact}d ago</p>
            </span>

            {/* Badges Container */}
            <div className="flex flex-col items-center gap-2 w-full">
              {/* Category Pill Tag (WORK) */}

              <span>
                {friend.tags.map((tag, ind) => (
                  <span key={ind} className="px-3 mr-1 py-1 bg-[#d1fae5] text-[#065f46] text-[10px] font-bold tracking-wider rounded-full uppercase select-none">
                    {tag}
                  </span>
                ))}
              </span>

              {/* Status Action Label (Almost Due) */}
              <span
                className={`px-4 py-1.5 text-white text-xs font-semibold rounded-full shadow-sm tracking-wide select-none ${
                  friend.status === "overdue"
                    ? "bg-red-500"
                    : friend.status === "on-track"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                }`}
              >
                {friend.status}
              </span>
            </div>
          </Link>
  );
};

export default FriendCart;
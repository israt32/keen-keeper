import { MessageSquareText, Phone, SquarePlay } from "lucide-react";
import { useEffect, useState } from "react";

const TimelineCart = ({ filterType}) => {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

 const iconMap = {
  Call: Phone,
  Text: MessageSquareText,
  Video: SquarePlay,
  };

  console.log(filterType, 'filtering top top')

 const IconComponent = iconMap[filterType.type];

  return (
    <div className="container mx-auto">
      

      <div className="w-full container mx-auto bg-white rounded-xl border border-slate-100 shadow-sm p-4 sm:p-5 flex items-center gap-4 transition-all duration-200 hover:shadow-md mb-4">
        <IconComponent></IconComponent>

       
        <div className="flex flex-col">
         
          <div className="flex flex-wrap items-baseline gap-1.5">
            <span className="text-base sm:text-lg font-bold text-[#1e463a] tracking-tight">
              {filterType.type}
            </span>
            <span className="text-sm sm:text-base text-slate-500">
              with {filterType.name}
            </span>
          </div>

        
          <span className="text-xs sm:text-sm text-slate-400 mt-0.5 font-medium">
            {formattedDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimelineCart;

import { MessageSquareText, Phone, SquarePlay } from "lucide-react";
import { useEffect, useState } from "react";

const TimelineCart = ({ callInfo }) => {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());


  const [sortingType, setSortingType] = useState('')
  // console.log(sortingType, 'sorting type')
  
  // useEffect(()=> {

  //   if(sortingType){
  //     if(sortingType === 'call'){
  //       const sortedCall = 
  //     }
  //     else if(sortingType === 'text'){

  //     }
  //     else{

  //     }
  //   }

  // }, [sortingType])


  const handleFilter = ({callInfo}) =>{
    if(callInfo.type === 'call'){
      const callArrays = callInfo.filter((callData => callData.type === 'call'))
    }
    else if(callInfo.type === 'text'){
      const callArrays = callInfo.filter((callData => callData.type === 'text'))
    }
    else{
      const callArrays = callInfo.filter((callData => callData.type === 'video'))
    }
  }



  return (
    <div className="container mx-auto">
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1 text-[#64748B] text-[18px] font-normal">
          Filter Timeline   ⬇️
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={()=> handleFilter(callInfo)}>
            <a>Call</a>
          </li>
          <li onClick={()=> handleFilter(callInfo)}>
            <a>Text</a>
          </li>
          <li onClick={()=> handleFilter(callInfo)}>
            <a>Video</a>
          </li>
        </ul>
      </div>


      <div className="w-full container mx-auto bg-white rounded-xl border border-slate-100 shadow-sm p-4 sm:p-5 flex items-center gap-4 transition-all duration-200 hover:shadow-md mb-4">
        {callInfo.icon}

        {/* Content Text Container */}
        <div className="flex flex-col">
          {/* Header Row */}
          <div className="flex flex-wrap items-baseline gap-1.5">
            <span className="text-base sm:text-lg font-bold text-[#1e463a] tracking-tight">
              {callInfo.type}
            </span>
            <span className="text-sm sm:text-base text-slate-500">
              with {callInfo.name}
            </span>
          </div>

          {/* Date Time Stamp */}
          <span className="text-xs sm:text-sm text-slate-400 mt-0.5 font-medium">
            {formattedDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimelineCart;

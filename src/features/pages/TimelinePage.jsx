import React, { useContext, useState } from 'react';
import { FriendContext } from '../../context/FriendContext';
import TimelineCart from '../components/TimelineCart';
import { getAllFromLocalDB } from '../../utils/localDB';

const TimelinePage = () => {
  const {checkIns} = useContext(FriendContext)
  console.log(checkIns, 'check ins')

  const [filteringTypes, setFilteringType] = useState(checkIns)

  
  const handleCall = (checkIns)=> {
    console.log(checkIns, 'cheki cheki chek')
     const onlyCalls = checkIns.filter(call => call.type === 'Call')
     console.log(onlyCalls, 'only calls')
     setFilteringType([...onlyCalls])
    
  }
  const handleText = (checkIns) => {
   const onlyTexts = checkIns.filter(text => text.type === 'Text')
   setFilteringType([...onlyTexts])
  }

  const handleVideo = (checkIns) => {
   const onlyVideos = checkIns.filter(video => video.type === 'Video')
   setFilteringType([...onlyVideos])
  }

  if(filteringTypes.length === 0){
    return <div className='container mx-auto rounded-2xl h-[50vh] bg-gray-100 flex items-center justify-center'>
   <h2 className='font-bold text-3xl'>No Check-In's to show </h2>
    </div>
  }

  return (
    <div>
      <div className='container mx-auto'>
         <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1 text-[#64748B] text-[18px] font-normal">
          Filter Timeline   ⬇️
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={()=> handleCall(checkIns)}>
            <a>Call</a>
          </li>
          <li onClick={()=> handleText(checkIns)}>
            <a>Text</a>
          </li>
          <li onClick={()=> handleVideo(checkIns)}>
            <a>Video</a>
          </li>
        </ul>
      </div>


      </div>
      {
        filteringTypes.map((filterType, ind) => <TimelineCart key={ind} filterType={filterType}></TimelineCart> )
      }
      
    </div>
  );
};

export default TimelinePage;
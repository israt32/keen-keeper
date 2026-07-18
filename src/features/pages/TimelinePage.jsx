import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendContext';
import TimelineCart from '../components/TimelineCart';

const TimelinePage = () => {
  const {checkIns} = useContext(FriendContext)
  console.log(checkIns, 'check ins')
  return (
    <div>
      {
        checkIns.map((callInfo, ind) => <TimelineCart key={ind} callInfo={callInfo}></TimelineCart> )
      }
      
    </div>
  );
};

export default TimelinePage;
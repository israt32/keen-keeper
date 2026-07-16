import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendContext';

const TimelinePage = () => {
  const {callInfos} = useContext(FriendContext)
  
  return (
    <div>
      time
    </div>
  );
};

export default TimelinePage;
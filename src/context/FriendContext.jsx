import React, {  createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext()

const FriendProvider = ({children}) => {

   const [callInfos, setCallInfos] = useState([]);
   const handleCall = (friendDetailsShow) => {
    const isAlreadyExisted = callInfos.find(callInfo => callInfo.id == friendDetailsShow.id)

    if(isAlreadyExisted){
      toast.error('this book already exist');
    }
    else{
      setCallInfos([...callInfos, friendDetailsShow])
      toast.success(`${friendDetailsShow.name} is added to list`)
    }
    
  }

  const data = {
      callInfos, setCallInfos, handleCall
  }

  return <FriendContext.Provider value={data}>
    {children}
  </FriendContext.Provider>
};

export default FriendProvider;
import { MessageSquareText, Phone, SquarePlay } from 'lucide-react';
import React, {  createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext()

const FriendProvider = ({children}) => {

   const [checkIns, setCheckIn] = useState([]);
   
   const handleCall = (friendDetailsShow) => {
    // const isAlreadyExisted = callInfos.find(callInfo => callInfo.id == friendDetailsShow.id)

    // if(isAlreadyExisted){
    //   toast.error('this book already exist');
    // }
    // else{
    //   setCallInfos([...callInfos, friendDetailsShow])
    //   toast.success(`${friendDetailsShow.name} is added to list`)
    // }
    ////////////////////////////////

    // setCallInfos([...callInfos, friendDetailsShow])
    
    

   const newFriendDetailsShow = {...friendDetailsShow, type: <Phone />};
   if(newFriendDetailsShow){
     setCheckIn([...checkIns, newFriendDetailsShow])
    toast.success(`Call with ${newFriendDetailsShow.name}!`)
   }

  }

  const handleText = (friendDetailsShow) => {
   const newFriendDetailsShow =  {...friendDetailsShow, type: <MessageSquareText  />};
   if(newFriendDetailsShow){
     setCheckIn([...checkIns, newFriendDetailsShow])
      toast.success(`Text with ${newFriendDetailsShow.name}!`)
   }
  }
  
  const handleVideo = (friendDetailsShow) => {
  const newFriendDetailsShow =  {...friendDetailsShow, type: <SquarePlay  />};
  if(newFriendDetailsShow){
    setCheckIn([...checkIns, newFriendDetailsShow])
    toast.success(`Video with ${newFriendDetailsShow.name}!`)
  }
  }

  const data = {
      checkIns, handleCall, handleText, handleVideo 
  }

  return <FriendContext.Provider value={data}>
    {children}
  </FriendContext.Provider>
};

export default FriendProvider;
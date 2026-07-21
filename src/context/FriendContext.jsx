import { MessageSquareText, Phone, SquarePlay } from 'lucide-react';
import React, {  createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addToLocalDB, getAllFromLocalDB } from '../utils/localDB';

export const FriendContext = createContext()

const FriendProvider = ({children}) => {

   const [checkIns, setCheckIn] = useState(()=>getAllFromLocalDB());

   const [loading, setLoading] = useState(true);

  // 2. Load data asynchronously on initial render
  useEffect(() => {
    const loadCheckIns = async () => {
      setLoading(true);
      try {
        const data = await getAllFromLocalDB();
        setCheckIn(data || []);
      } catch (error) {
        console.error('Failed to load check-ins:', error);
      } finally {
        // Small timeout option if you want to simulate/see the loading screen smoothly
        setLoading(false);
      }
    };

    loadCheckIns();
  }, []);

   
   const handleCall = (friendDetailsShow) => {
    
    

   const newFriendDetailsShow = {...friendDetailsShow, type: 'Call' };
   if(newFriendDetailsShow){
     setCheckIn([...checkIns, newFriendDetailsShow])
    toast.success(`Call with ${newFriendDetailsShow.name}!`)
   }

   addToLocalDB(newFriendDetailsShow)

  }

  const handleText = (friendDetailsShow) => {

  

   const newFriendDetailsShow =  {...friendDetailsShow, type: 'Text'  };
   if(newFriendDetailsShow){
     setCheckIn([...checkIns, newFriendDetailsShow])
      toast.success(`Text with ${newFriendDetailsShow.name}!`)
   }

   addToLocalDB(newFriendDetailsShow)

  }
  
  const handleVideo = (friendDetailsShow) => {
    

  const newFriendDetailsShow =  {...friendDetailsShow, type: 'Video' };
  if(newFriendDetailsShow){
    setCheckIn([...checkIns, newFriendDetailsShow])
    toast.success(`Video with ${newFriendDetailsShow.name}!`)
  }

   addToLocalDB(newFriendDetailsShow)
  }

  const data = {
      checkIns, setCheckIn, handleCall, handleText, handleVideo , loading
  }

  return <FriendContext.Provider value={data}>
    {children}
  </FriendContext.Provider>
};

export default FriendProvider;
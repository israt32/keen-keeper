import React, { useContext } from 'react';
import FriendsBanner from '../components/FriendsBanner';
import FriendLists from '../components/FriendLists';
import { FriendContext } from '../../context/FriendContext';


const HomePage = () => {
  const { loading } = useContext(FriendContext);

  return (
    <div>
      <FriendsBanner />

      {loading ? (
        <div className="min-h-[40vh] flex flex-col items-center justify-center gap-3">
         <span className="loading loading-spinner loading-xl text-[#1e463a]"></span>
        </div>
      ) : (
        <FriendLists />
      )}
    </div>
  );
};

export default HomePage;
import React from 'react';
import FriendsBanner from '../components/FriendsBanner';
import FriendDetails from '../pages/FriendDetails';
import FriendLists from '../components/FriendLists';

const HomePage = () => {
  return (
    <div>
      <FriendsBanner></FriendsBanner>
      <FriendLists></FriendLists>
    </div>
  );
};

export default HomePage;
import React, { use } from "react";
import Cart from "./FriendCart";

const friendsPromise = fetch("/friendsData.json").then((res) => res.json());

const FriendLists = () => {
  const friends = use(friendsPromise);
  console.log(friends);
  return (
    <div className="container mx-auto ">
      <h1 className="text-2xl font-semibold text-[#1F2937] mb-4">Your Friends</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 ">
      {friends.map((friend) => {
        return (
        <Cart key={friend.id} friend={friend}></Cart>
        );
      })}

      </div>
    </div>
  );
};

export default FriendLists;

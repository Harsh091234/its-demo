// src/pages/Home.jsx
import React from "react";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";

const Home = () => {
  return (
    <div className="overflow-y-auto py-6 px-4 flex flex-col gap-7 h-full">
      <div className="md:max-w-2xl w-full ">
        <CreatePost />
      </div>
      <div className="  md:max-w-2xl  w-full flex flex-col gap-6">
        <PostCard
          favatarSrc={"https://randomuser.me/api/portraits/men/22.jpg"}
          fullName={"Harsh"}
          username={"harsh1232"}
          content={"I am a programmer guy"}
          status="online"
        />
        <PostCard
          favatarSrc={
            "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?w=151&h=192&c=7&r=0&o=7&pid=1.7&rm=3"
          }
          fullName={"Harsh"}
          username={"harsh1232"}
          content={"I am a programmer guy"}
          status="online"
        />
        <PostCard
          favatarSrc={
            "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?w=151&h=192&c=7&r=0&o=7&pid=1.7&rm=3"
          }
          fullName={"Harsh"}
          username={"harsh1232"}
          content={"I am a programmer guy"}
          status="online"
        />
      </div>
    </div>
  );
};

export default Home;

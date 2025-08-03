// src/pages/Home.jsx
import React from "react";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
import { usePosts } from "../context/PostContext";

const Home = () => {
 const { posts} = usePosts();

  return (
    <div className="overflow-y-auto py-6 px-4 flex flex-col gap-7 h-full">
      <div className="md:max-w-2xl w-full ">
        <CreatePost />
      </div>

      <div className="  md:max-w-2xl  w-full flex flex-col gap-6">
        {posts.map((post) => (
          <PostCard key={post._id}
            favatarSrc={ "https://randomuser.me/api/portraits/men/22.jpg"}
            fullName={post.author.fullname}
            username={post.author.username}
            content={post.content}
            status="online"
          />
        ))}

      
      </div>
    </div>
  );
};

export default Home;

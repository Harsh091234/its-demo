// src/pages/Home.jsx
import React from "react";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
import { usePosts } from "../context/PostContext";
import { useUser } from "../context/UserContext";
import axios from "axios";
const Home = () => {
 const { posts, fetchPosts } = usePosts();
  const { user } = useUser();

  const handleToggleLike = async (postId) => {
    try {
      const token = localStorage.getItem("authToken");
      const res = await axios.post(
        `${import.meta.env.VITE_API_URI}/likeposts/${postId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data.success) {
        fetchPosts(); 
      }
    } catch (err) {
      console.error("Like failed", err.message);
    }
  };

  return (
    <div className="overflow-y-auto py-6 px-4 flex flex-col gap-5 h-full">
      <div className="md:max-w-2xl w-full ">
        <CreatePost />
      </div>

      <div className="  md:max-w-2xl  w-full flex flex-col gap-3">
        {posts.map((post) => (
          <PostCard
            key={post._id}
            favatarSrc={"https://randomuser.me/api/portraits/men/22.jpg"}
            fullName={post.author.fullname}
            username={post.author.username}
            content={post.content}
            status="online"
            onToggleLike={handleToggleLike}
            postId={post._id}
            likedByUser={post.likes.includes(user?._id)}
            likesCount={post.likes.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

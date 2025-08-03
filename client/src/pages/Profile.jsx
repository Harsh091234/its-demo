import React, { useEffect, useState } from "react";
import Avatar from "../components/ui/Avatar";
import { CalendarDays, MapPin, Globe } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import EditProfileModal from "../components/modals/EditProfileModal";
import { usePosts } from "../context/PostContext";
import { useUser } from "../context/UserContext"
import axios from "axios";
const Profile = () => {
  
    const { myPosts, ownPostsLoading, fetchOwnPosts, deletePost } = usePosts();
       const { user, loading } = useUser();
    const [showEditModal, setShowEditModal] = useState(false);
  
    const handleDeletePost = async (postId) => {
    const res = await deletePost(postId);
    if (res.success) {
       fetchOwnPosts();
    } else {
      alert("Failed to delete post");
    }
  };
  const handleToggleLike = async (postId) => {
    try {
        const token = localStorage.getItem("authToken");
        console.log(token);
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
        fetchOwnPosts();
      }
    } catch (err) {
      console.error("Like failed", err.message);
    }
  };
  useEffect(() => {
     fetchOwnPosts(); 
   }, []);

   if (loading) {
     return <div className="text-white">Loading...</div>;
   }

   
   if (!user) {
     return <div className="text-white">User not found</div>;
   }

 
  return (
    <div className="pt-7 px-4 w-full flex flex-col items-center space-y-8">
      <div className="w-full max-w-3xl border border-stone-800 rounded-2xl shadow-xl bg-stone-950 p-10 text-white">
        <div className="flex justify-center mb-6">
          <Avatar
            src={user?.avatar}
            name={user.fullname}
            showName={false}
            size="2xl"
            status="online"
          />
        </div>

        <div className="text-center mb-3">
          <h2 className="text-xl font-bold">{user.fullname}</h2>
          <p className="text-sm text-stone-400 ">{user.username}</p>
        </div>

        <p className="text-base text-stone-300 text-center mb-6">{user.bio}</p>

        <div className="text-center mb-8">
          <button
            onClick={() => setShowEditModal(!showEditModal)}
            className="px-10 py-2 bg-stone-300 hover:bg-stone-400 text-stone-900 font-bold rounded-xl text-sm  transition duration-200"
          >
            Edit Profile
          </button>

          <EditProfileModal
            isOpen={showEditModal}
            onClose={() => setShowEditModal(!showEditModal)}
            initialData={{
              fullname: user.fullname,
              website: user.website,
              bio: user.bio,
              location: user.location,
              picture: user.avatar, 
            }}
          />
        </div>

        <div className="flex flex-col space-y-2 text-sm text-stone-300">
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span>{user.location}</span>
          </div>

          <div className="flex items-center space-x-3 text-stone-300">
            <Globe className="w-5 h-5 text-blue-400" />
            <Link
              to={user.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-all"
            >
             {user.website}
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <CalendarDays className="w-5 h-5 text-blue-400" />
            <span>Joined {new Date(user.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl space-y-4 text-white">
        <h2 className="text-xl font-semibold mb-2">Posts</h2>
        {ownPostsLoading ? (
          <p>Loading your posts...</p>
        ) : myPosts.length > 0 ? (
          myPosts.map((post) => (
            <PostCard 
              key={post._id}
              favatarSrc={user.avatar}
              fullName={user.fullname}
              username={user.username}
              content={post.content}
              postId={post._id}
              onDelete={handleDeletePost}
              status="online"
              timestamp={post.timestamp}
              canDelete={post.author === user._id}
              likedByUser={post.likes.includes(user._id)}
              likesCount={post.likes.length}
              onToggleLike={handleToggleLike}
            />
          ))
        ) : (
          <p className="text-sm text-stone-400">
            You haven’t posted anything yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;

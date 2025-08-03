import React, { useEffect, useState } from "react";
import Avatar from "../components/ui/Avatar";
import { CalendarDays, MapPin, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import EditProfileModal from "../components/modals/EditProfileModal";
import { usePosts } from "../context/PostContext";
import { useUser } from "../context/UserContext";

const Profile = () => {
    const { myPosts, ownPostsLoading, fetchOwnPosts } = usePosts();
       const { user, loading } = useUser();
    const [showEditModal, setShowEditModal] = useState(false);

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
            src={"https://randomuser.me/api/portraits/men/22.jpg"}
            name={user.fullname}
            showName={false}
            size="2xl"
            status="online"
          />
        </div>

        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">{user.fullname}</h2>
          <p className="text-sm text-stone-400 mt-1">{user.username}</p>
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
            }}
          />
        </div>

        <div className="flex flex-col space-y-4 text-sm text-stone-300">
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span>{user.location}</span>
          </div>

          <div className="flex items-center space-x-3">
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
              favatarSrc={"https://randomuser.me/api/portraits/men/22.jpg"}
              fullName={user.fullname}
              username={user.username}
              content={post.content}
              status="online"
              timestamp={post.timestamp}
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

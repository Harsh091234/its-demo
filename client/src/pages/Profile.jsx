import React, { useState } from "react";
import Avatar from "../components/ui/Avatar";
import { CalendarDays, MapPin, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import EditProfileModal from "../components/modals/EditProfileModal";

const Profile = () => {
  const favatarSrc = "https://randomuser.me/api/portraits/men/22.jpg";
  const fullName = "Harsh Sharma";
  const username = "harsh_dev";
  const bio = "Passionate full-stack developer building cool web apps.";
  const website = "https://harsh.dev";
  const location = "New Delhi, India";
  const joinedDate = "August 2023";
    const [showEditModal, setShowEditModal] = useState(false);

  // Sample posts (you can fetch these from backend in real apps)
  const posts = [
    {
      content: "Just launched my portfolio website! 🚀 Check it out.",
      timestamp: "2h ago",
    },
    {
      content: "Exploring React 19 beta and it’s amazing! 💻",
      timestamp: "1d ago",
    },
    {
      content: "Deployed my new MERN app on Vercel! 🔥",
      timestamp: "3d ago",
    },
  ];

  return (
    <div className="pt-7 px-4 w-full flex flex-col items-center space-y-8">
      {/* Profile Card */}
      <div className="w-full max-w-3xl border border-stone-800 rounded-2xl shadow-xl bg-stone-950 p-10 text-white">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <Avatar
            src={favatarSrc}
            name={fullName}
            showName={false}
            size="2xl"
            status="online"
          />
        </div>

        {/* Name & Username */}
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">{fullName}</h2>
          <p className="text-sm text-stone-400 mt-1">@{username}</p>
        </div>

        {/* Bio */}
        <p className="text-base text-stone-300 text-center mb-6">{bio}</p>

        {/* Edit Profile Button */}
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
            initialData={{ fullName, website, bio }}
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col space-y-4 text-sm text-stone-300">
          {/* Location */}
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span>{location}</span>
          </div>

          {/* Website */}
          <div className="flex items-center space-x-3">
            <Globe className="w-5 h-5 text-blue-400" />
            <Link
              to={website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-all"
            >
              {website}
            </Link>
          </div>

          {/* Joined */}
          <div className="flex items-center space-x-3">
            <CalendarDays className="w-5 h-5 text-blue-400" />
            <span>Joined {joinedDate}</span>
          </div>
        </div>
      </div>

      {/* My Posts Section */}
      <div className="w-full max-w-3xl space-y-4 text-white">
        <h2 className="text-xl font-semibold mb-2">Posts</h2>
        {posts.map((post, index) => (
          <PostCard
            key={index}
            favatarSrc={favatarSrc}
            fullName={fullName}
            username={username}
            content={post.content}
            status="online"
            timestamp={post.timestamp}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;

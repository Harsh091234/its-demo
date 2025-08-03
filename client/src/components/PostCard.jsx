import React from "react";
import { Heart, Trash2 } from "lucide-react";
import Avatar from "./ui/Avatar";

  const PostCard = ({
    favatarSrc,
    fullName,
    username,
    content,
    status = "online",
  }) => {
    return (
      <div className="border border-stone-800 rounded-xl p-6 text-white shadow w-full">
        {/* Top: Avatar + User Info */}
        <div className="flex items-start space-x-4 mb-4">
          <Avatar
            src={favatarSrc}
            name={fullName}
            showName={false}
            size="md"
            status={status}
          />
          <div className="flex flex-col ">
            <span className="text-base font-semibold -mb-1">{fullName}</span>
            <span className="text-sm text-stone-400">@{username}</span>
          </div>
        </div>

        {/* Post Content */}
        <p className="text-sm text-stone-300 mb-5 leading-relaxed">{content}</p>

        {/* Actions: Like & Delete */}
        <div className="flex justify-between items-center">
          <button className="flex items-center text-stone-400 hover:text-red-500 transition text-sm">
            <Heart className="w-3 h-3 mr-2" />
            <span>Like</span>
          </button>
          <button className="flex items-center text-stone-400 hover:text-red-500 transition text-sm">
            <Trash2 className="w-3 h-3 mr-2" />
            <span>Delete</span>
          </button>
        </div>
      </div>
    );
  };

export default PostCard;

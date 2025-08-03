import React from "react";
import { Heart, Trash2 } from "lucide-react";
import Avatar from "./ui/Avatar";

  const PostCard = ({
    favatarSrc,
    fullName,
    username,
    content,
    status = "online",
    onDelete = () => {},
    postId,
    canDelete = false,
    likedByUser,
    likesCount,
    onToggleLike = () => {},
  }) => {
    const handleDeleteClick = () => {
      onDelete?.(postId); 
    };
    const handleLikeClick = () => {
      onToggleLike?.(postId); 
    };

    return (
      <div className="border border-stone-800 rounded-xl p-6 text-white shadow w-full"> 
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
            <span className="text-sm text-stone-400">{username}</span>
          </div>
        </div>

        <p className="text-sm text-stone-300 mb-5 leading-relaxed">{content}</p>

       
        <div className="flex justify-between items-center">
          <button
            onClick={handleLikeClick}
            className={`flex items-center text-sm transition ${
              likedByUser ? "text-red-500" : "text-stone-400 hover:text-red-500"
            }`}
          >
            <Heart
              className="w-3 h-3 mr-2"
              fill={likedByUser ? "red" : "none"}
            />
            <span>
              {likesCount} Like{likesCount !== 1 && "s"}
            </span>
          </button>
          {canDelete && (
            <button
              onClick={handleDeleteClick}
              className="flex items-center text-stone-400 hover:text-red-500 transition text-sm"
            >
              <Trash2 className="w-3 h-3 mr-2" />
              <span>Delete</span>
            </button>
          )}
        </div>
      </div>
    );
  };

export default PostCard;

import React from "react"; // adjust the path if needed
import { Link } from "react-router-dom";
import Avatar from "./ui/Avatar";

const NotificationCard = ({
  avatarSrc,
  fullName,
  username,
  postId,
  fallback = "U",
}) => {
  return (
    <div className="flex items-start gap-3 px-4 py-5 text-white shadow-sm rounded-xl border border-stone-800">
      <Avatar
        src={avatarSrc}
        fallback={fallback}
        name={fullName}
        size="md"
        status="online"
        showName={false}
      />
      <div className="flex flex-col">
        <div className="text-sm leading-tight font-semibold">
          <span className="block">{fullName}</span>
          <span className="text-xs font-normal text-stone-400">
            @{username}
          </span>
        </div>

        <div className="text-sm text-stone-300 mt-1">liked your post</div>

        <Link
          to={`/profile?post=${postId}`}
          className="text-xs text-stone-500 mt-1 hover:text-stone-300 transition"
        >
          View post
        </Link>
      </div>
    </div>
  );
};

export default NotificationCard;

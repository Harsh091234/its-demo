import React from "react";

const Avatar = ({
  src,
  alt = "User",
  fallback = "U",
  name,
  showName = false,
  size = "md", // sm, md, lg
  status = "online", // online, offline, busy
}) => {
  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-14 w-14 text-base",
    xl: "h-18 w-18 text-lg",
    "2xl": "h-24 w-24 text-xl",
  };

  const statusColors = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    busy: "bg-red-500",
  };

  return (
    <div className="flex items-center space-x-3">
      <div className={`relative ${sizeClasses[size]}`}>
        {src ? (
          <img
            src={src}
            alt={alt}
            className={`rounded-full object-cover ${sizeClasses[size]}`}
          />
        ) : (
          <div
            className={`rounded-full flex items-center justify-center bg-stone-700 text-white font-semibold ${sizeClasses[size]}`}
          >
            {fallback}
          </div>
        )}
        <span
          className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-stone-950 ${statusColors[status]}`}
        />
      </div>
      {showName && <p className="text-white font-medium">{name}</p>}
    </div>
  );
};

export default Avatar;

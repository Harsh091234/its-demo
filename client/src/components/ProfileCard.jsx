import React from "react";
import { MapPin, CalendarDays } from "lucide-react";
import Avatar from "./ui/Avatar";

const ProfileCard = ({
  favatarSrc,
  fullName,
  username,
  bio,
  location,
  joinedDate,
 
}) => {
  return (
    <div className="h-fit border border-stone-800 rounded-2xl shadow-md p-8 text-white mx-auto">
     
      <div className="flex justify-center mb-6">
        <Avatar
          src={favatarSrc}
          name={fullName}
          showName={false}
          size="xl"
          status="online"
        />
      </div>

      
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold">{fullName}</h2>
        <p className="text-md text-stone-400 -mt-1">{username}</p>
      </div>

   
      <p className="text-base text-stone-300 mb-4 text-center">{bio}</p>

    
      <div className="rounded-lg px-5 py-4 text-sm text-stone-300 flex flex-col space-y-2">
        <div className="flex items-center space-x-3">
          <MapPin className="w-5 h-5 text-blue-400" />
          <span>{location}</span>
        </div>
        <div className="flex items-center space-x-3">
          <CalendarDays className="w-5 h-5 text-blue-400" />
          <span>Joined since {joinedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

import React, { useState } from "react";
import { X } from "lucide-react";
const EditProfileModal = ({ isOpen, onClose, initialData, onSave }) => {
  const [fullName, setFullName] = useState(initialData.fullName || "");
  const [bio, setBio] = useState(initialData.bio || "");
  const [website, setWebsite] = useState(initialData.website || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ fullName, bio, website });
    
  };

  if (!isOpen) return null;

  return (
    <div
      className="  fixed inset-0 z-50 flex items-center justify-center  max-sm:bg-black"
      onClick={onClose}
    >
      <div
        className=" border border-stone-700 rounded-2xl p-8 w-full max-w-md text-white shadow-xl relative bg-stone-950 max-sm:bg-black" 
        onClick={(e) => e.stopPropagation()}
      >
        <X
          className="absolute right-4 top-3 w-5 h-5 text-stone-400 hover:text-red-500 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="text-[1.2em] font-semibold mb-4">Edit Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="">
            <label className="text-md text-stone-400">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full mt-1 px-3 py-1.5  text-sm rounded-lg bg-stone-800 border border-stone-600 focus:outline-none"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="text-md text-stone-400">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full mt-1 px-3 py-1.5 rounded-lg  text-sm bg-stone-800 border border-stone-600 focus:outline-none resize-none"
              rows={3}
            />
          </div>

          {/* Website */}
          <div>
            <label className="text-md text-stone-400">Website</label>
            <input
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full mt-1 px-3 py-1.5 text-sm rounded-lg bg-stone-800 border border-stone-600 focus:outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="submit"
              onClick={onClose}
              className="px-4 py-2 text-sm rounded-md bg-blue-600 hover:bg-blue-700"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;

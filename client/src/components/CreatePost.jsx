import React, {useState} from 'react'
import { Send } from "lucide-react";
import { Link } from "react-router-dom";

const CreatePost = () => {
     const [content, setContent] = useState("");
  return (
    <div className="border border-stone-800 rounded-xl p-6 w-full  text-white shadow">
      {/* Top: Avatar */}
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="https://randomuser.me/api/portraits/men/22.jpg"
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover border border-stone-700"
        />
        <span className="text-stone-200 text-md">What's on your mind?</span>
      </div>

      {/* Textarea */}
      <textarea
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your post..."
        className="w-full resize-none bg-stone-900 border border-stone-700 rounded-lg p-3 text-sm text-white placeholder-stone-500 outline-0"
      ></textarea>

      {/* Post Button */}
      <div className="flex justify-end mt-4">
        <Link
          to="/post"
          className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition scrollbar"
        >
          <span>Post</span>
          <Send className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default CreatePost
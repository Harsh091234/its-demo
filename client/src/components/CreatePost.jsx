import React, {useState} from 'react'
import { Send } from "lucide-react";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from 'axios';

const CreatePost = () => {
     const [content, setContent] = useState("");

      const handleSubmit = async(e) => {
          e.preventDefault();
            if (!content.trim()) {
      return toast.error("Post content can't be empty");
    }

    try {
    
      const token = localStorage.getItem("authToken");

      const res = await axios.post(
        `${import.meta.env.VITE_API_URI}/createpost`,
        { content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        toast.success("Post created successfully!");
        setContent(""); 
     
      } else {
        toast.error("Failed to create post");
      }
    } catch (error) {
      console.error("error in CreatePost:", error);
      toast.error("Something went wrong");
    } 
      }

  return (
    <div className="border border-stone-800 rounded-xl p-6 w-full  text-white shadow">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="https://randomuser.me/api/portraits/men/22.jpg"
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover border border-stone-700"
        />
        <span className="text-stone-200 text-md">What's on your mind?</span>
      </div>
      <form
        onSubmit={handleSubmit}
    
      >
        <textarea
          rows={4}
          
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post..."
          className="w-full resize-none bg-stone-900 border border-stone-700 rounded-lg p-3 text-sm text-white placeholder-stone-500 outline-0"
        ></textarea>

        {/* Post Button */}
        <div className="flex justify-end mt-4">
          <button
            type="submit"
           
            className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition disabled:opacity-50"
          >
            <span>Post</span>
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost
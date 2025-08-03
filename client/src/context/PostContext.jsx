import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
    const [ownPostsLoading, setOwnPostsLoading] = useState(true);
    const [myPosts, setMyPosts] = useState([]);

const token = localStorage.getItem("authToken");

  const fetchPosts = async () => {
    
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URI}/getotherusersposts`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPosts(res.data.posts);
    } catch (error) {
      console.error("Error fetching posts", error);
    } finally {
      setLoading(false);
    }
  };
    //own posts
   const fetchOwnPosts = async () => {
     if (!token) {
       setOwnPostsLoading(false);
       return;
     }

     try {
       const res = await axios.get(`${import.meta.env.VITE_API_URI}/getposts`, {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       });
       setMyPosts(res.data.posts);
     } catch (error) {
       console.error("Error fetching own posts", error);
     } finally {
       setOwnPostsLoading(false);
     }
   };
const deletePost = async (postId) => {
  const token = localStorage.getItem("authToken");
  try {
     await axios.delete(
      `${import.meta.env.VITE_API_URI}/deletepost/${postId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { success: true };
  } catch (err) {
    console.error("Failed to delete post:", err);
    return { success: false };
  }
};
  useEffect(() => {
    fetchPosts();
   
  }, []);

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        fetchPosts,
        loading,
        myPosts,
        setMyPosts,
        fetchOwnPosts,
        deletePost
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => useContext(PostContext);

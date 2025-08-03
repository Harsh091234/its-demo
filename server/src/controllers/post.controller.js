import { Post } from "../models/post.model.js";



export const createPost = async(req, res) => {
     try {
       const { content } = req.body;
        if(!content) throw new Error("Content Empty");
       const newPost = new Post({
        
         content,
         author: req.userId, 
       });

       await newPost.save();

       res.status(201).json({ success: true, post: newPost });
     } catch (err) {
       console.error("Error creating post", err);
       res.status(500).json({ success: false, message: "Error creating post" });
     }
}

export const getPosts = async(req, res) => {
    try {
      const posts = await Post.find({ author: req.userId }).sort({
        createdAt: -1,
      });
      res.status(200).json({ success: true, posts });
    } catch (err) {

        console.log("Failed to fetch posts", err.message);
      res
        .status(500)
        .json({ success: false, message: "Failed to fetch posts" });
    }

}

export const getOtherUserPosts = async(req, res) => {
    try {
        const posts = await Post.find({
          author: { $ne: req.userId },
        })
          .populate("author", "fullname username picture")
          .sort({ createdAt: -1 });
         res.status(200).json({ success: true, posts });
    } catch (error) {
        console.log("Failed to fetch other users' posts ", error.message);
         res
           .status(500)
           .json({
             success: false,
             message: "Failed to fetch other users' posts",
           });
    }
}

export const deletePost = async(req, res) => {
      try {
        const postId = req.params.id;
        const userId = req.userId;

        const post = await Post.findById(postId);

        if (!post) {
          return res
            .status(404)
            .json({ success: false, message: "Post not found" });
        }

        if (post.author.toString() !== userId) {
          return res
            .status(403)
            .json({
              success: false,
              message: "Not authorized to delete this post",
            });
        }

        await Post.findByIdAndDelete(postId);

        res.status(200).json({ success: true, message: "Post deleted" });
      } catch (err) {
        console.log("Failed to delete post:", err.message);
        res.status(500).json({ success: false, message: "Failed to delete post" });
      }
}

export const editPost = async (req, res) => {
     try {
       const postId = req.params.id;
       const userId = req.userId;
       const { content } = req.body;

       const post = await Post.findById(postId);

       if (!post) {
         return res
           .status(404)
           .json({ success: false, message: "Post not found" });
       }

       if (post.author.toString() !== userId) {
         return res
           .status(403)
           .json({
             success: false,
             message: "Not authorized to edit this post",
           });
       }

       post.content = content || post.content;
       await post.save();

       res.status(200).json({ success: true, message: "Post updated", post });
     } catch (err) {
       console.log("Error editing post: ", err.message);
       res.status(500).json({ success: false, message: "Error editing post" });
     }
};

export const toggleLikePost = async (req, res) => {
  try {
    const userId = req.userId;
    const post = await Post.findById(req.params.id);

    if (!post)
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });

    const hasLiked = post.likes.includes(userId);
    if (hasLiked) {
      post.likes.pull(userId); 
    } else {
      post.likes.push(userId);
    }

    await post.save();

    res.status(200).json({
      success: true,
      liked: !hasLiked,
      likesCount: post.likes.length,
    });
  } catch (err) {
    console.error("Like failed", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
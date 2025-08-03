import express from "express";
import verifyToken from "../middlewares/auth.middleware.js";
import {
  createPost,
  getPosts,
  getOtherUserPosts,
  deletePost,
  editPost,
} from "../controllers/post.controller.js";
const router = express.Router();


router.post("/createpost", verifyToken, createPost);
router.get("/getposts", verifyToken, getPosts);
router.get("/getotherusersposts", verifyToken, getOtherUserPosts);
router.delete("/deletepost/:id", verifyToken, deletePost);
router.put("/editpost/:id", verifyToken, editPost);

export default router;
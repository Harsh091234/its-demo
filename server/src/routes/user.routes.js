import express from "express";
import { getUser, editUserById } from "../controllers/user.controller.js";
import verifyToken from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/getuser",verifyToken, getUser);
router.put("/edituser/:id", verifyToken, editUserById);

export default router;
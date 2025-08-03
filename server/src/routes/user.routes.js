import express from "express";
import {getUser} from "../controllers/user.controller.js"
import verifyToken from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/getuser",verifyToken, getUser);

export default router;
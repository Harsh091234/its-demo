import express from "express";
import {getDetails} from "../controllers/user.controllers.js"

const router = express.Router();

router.get("/getdetails", getDetails);

export default router;
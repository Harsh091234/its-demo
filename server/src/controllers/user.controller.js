import { User } from "../models/user.model.js";



export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (err) {
    console.error("getUser error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

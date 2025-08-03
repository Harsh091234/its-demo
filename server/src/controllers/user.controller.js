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


export const editUserById = async (req, res) => {
  try {
    const { id } = req.params;
     const { fullname, bio, website, location, avatar } = req.body;
    if (req.userId.toString() !== id) {
      return res.status(403).json({ success: false, message: "Forbidden" });
    }

    
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          ...(fullname && { fullname }),
          ...(bio && { bio }),
          ...(website && { website }),
          ...(location && { location }),
          ...(avatar && { avatar }),
        },
      },
      { new: true }
    );

if (!updatedUser) {
  return res.status(404).json({ success: false, message: "User not found" });
}
    res.status(200).json({ success: true, message: "User updated", updatedUser });
  } catch (err) {
    console.error("editUserById error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
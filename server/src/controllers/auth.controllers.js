import bcryptjs from "bcryptjs";
import { User } from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
export const signup = async(req, res) => {
  const { email, password, fullname, username } = req.body;
  try {
    if (!email || !password || !fullname || !username) {
      throw new Error("Please fill all credentials");
    }

    const existingUser = await User.findOne({ email});
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "user already exists" });
    }
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res
        .status(400)
        .json({ success: false, message: "username already taken" });
    }
  
    const hashedPassword = await bcryptjs.hash(password, 10);

    const user = new User({
      fullname,
      email,
      password: hashedPassword,
      username
    });

    await user.save();

   const token =  generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      success: true,
      message: "user created successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
      token
    });
  } catch (error) {
    console.log("Error in signup");
    res.status(500).json({ success: false, message: error.message });
  }
}

export const login = async(req, res) => {
    const { email, password } = req.body;
     if (!email || !password ) {
       throw new Error("Please fill all credentials");
     }
     try {
       const existingUser = await User.findOne({ email });
       if (!existingUser) {
         return res
           .status(400)
           .json({ success: false, message: "Invalid Credentials" });
       }

       const isPasswordValid = await bcryptjs.compare(
         password,
         existingUser.password
       );
       if (!isPasswordValid) {
         return res
           .status(400)
           .json({ success: false, message: "Invalid Credentials" });
       }

      const token =  generateTokenAndSetCookie(existingUser._id, res);
       existingUser.lastLogin = new Date();
       await existingUser.save();
       
        res.status(200).json({
          success: true,
          message: "logged in successfully",
          user: {
            ...existingUser._doc,
            password: undefined,
          },
          token
        });
     } catch (error) {
      console.log("Error in login");
      res.status(500).json({ success: false, message: error.message });
     }
     

}

export const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "logout successful" });
};

import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    website: String,

    avatar: {
      type: String,
      default:
        "https://ts3.mm.bing.net/th?id=OIP.ItvA9eX1ZIYT8NHePqeuCgHaHa&pid=15.1",
    },
    lastLogin: Date,

    provider: { type: String, default: "local" },
    googleId: String,
    resetPasswordToken: String,
    resetPasswordTokenExpiresAt: Date,
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", function (next) {
  if (this.username && !this.username.startsWith("@")) {
    this.username = `@${this.username}`;
  }
  next();
});

export const User = mongoose.model("User", userSchema);

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  login: String,
  id: Number,
  avatar_url: String,
  name: String,
  company: String,
  location: String,
  email: String,
  bio: String,
  followers: Number,
  following: Number,
});

const UserModel = mongoose.model("users", userSchema);

export default UserModel;

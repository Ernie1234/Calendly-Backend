import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  country: {
    type: String,
  },
  welcomeMsg: {
    type: String,
  },
});

export const UserModel = mongoose.model("User", UserSchema);

import { UserModel } from "../models/user";

const getUser = () => {
  return UserModel.find();
};
const getUserByEmail = (email: string) => {
  return UserModel.findOne({ email });
};
const getUserBySessionToken = (token: string) => {
  return UserModel.findOne({ sessionToken: token });
};
const getUserById = (id: string) => {
  return UserModel.findById(id);
};
const createUser = (values: Record<string, any>) => {
  new UserModel(values)
    .save()
    .then((user) => {
      user.toObject();
    })
    .catch((err) => {
      console.log(err);
    });
};
const deleteUserById = (id: string) => {
  UserModel.findByIdAndDelete({ _id: id })
    .then((user) => {
      if (user) user.toObject();
    })
    .catch((err) => {
      console.log(err);
    });
};
const updateUserById = (id: string, values: Record<string, any>) => {
  UserModel.findByIdAndUpdate({ _id: id }, values)
    .then((user) => {
      if (user) user.toObject();
    })
    .catch((err) => {
      console.log(err);
    });
};

export {
  getUser,
  getUserByEmail,
  getUserBySessionToken,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
};

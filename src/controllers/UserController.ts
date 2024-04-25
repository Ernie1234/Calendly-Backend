import { Request, Response } from "express";
import { UserModel } from "../models/user";

export const addUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;
    const exitstingUser = await UserModel.findOne({ auth0Id });

    if (exitstingUser) {
      return res.status(200).send();
    }

    const newUser = new UserModel(req.body);
    await newUser.save();

    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Error creating user" });
  }
};

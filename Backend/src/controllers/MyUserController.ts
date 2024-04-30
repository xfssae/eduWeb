import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
  try {
    // 1. Check if the user exists
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      // 2. Return existing user if found
      return res.status(200).json(existingUser.toObject());
    }

    // 3. Create a new user if it doesn't exist
    const newUser = new User(req.body);
    await newUser.save();

    // Return the newly created user object to the client
    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

//update user profile
const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const { name, addressLine1, city, country } = req.body;

    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.name = name;
    user.addressLine1 = addressLine1;
    user.city = city;
    user.country = country;

    await user.save;
    res.send(user);

  
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating user" });
  }
};

export default {
  createCurrentUser,updateCurrentUser,
};

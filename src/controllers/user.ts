import User, { IUserModel } from "../models/user";
import bcrypt from "bcrypt";
import { config } from "../shared/config";

const mongoose = require("mongoose");


export const signup = async (req, res, next) => {
  const foundUsername = await User.find({ username: req.body.username });
  if (!foundUsername) {
    return res.status(401).send({ message: "This username is taken" });
  }

  const salt: string = await bcrypt.genSalt(config.security.saltRounds);
  const password = await bcrypt.hash(req.body.password, salt);

  const newUser: IUserModel = {
    _id: mongoose.Types.ObjectId(),
    email: req.body.email,
    username: req.body.username,
    password: password,
    name: {
      first: req.body.name.first,
      last: req.body.name.last,
    },
    created: new Date(),
    updated: new Date(),
    lastActiveAt: new Date(),
  } as IUserModel;

  const user = new User(newUser);
  user.save().then((result) => {});
};

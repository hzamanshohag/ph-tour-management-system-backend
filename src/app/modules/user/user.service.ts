import AppError from "../../ErrorHelpers/AppError";
import { IAuthProvider, IUser } from "./user.interface";
import { User } from "./user.model";
import { StatusCodes } from "http-status-codes";

const createUser = async (payload: Partial<IUser>) => {
  const { email, ...rest } = payload;
  if (!email) {
    throw new Error("Email is required");
  }

  const isUserExist = await User.findOne({ email });

  if (isUserExist) {
    throw new AppError(StatusCodes.BAD_REQUEST, "This user are already exist");
  }

  const authProvider: IAuthProvider = { provider: "google", providerId: email };

  const user = await User.create({
    email,
    auths: [authProvider],
    ...rest,
  });

  return user;
};

const getAllUsers = async () => {
  const users = await User.find({});

  const totalUsers = await User.countDocuments();

  return { data: users, meta: { total: totalUsers } };
};

export const UserServices = {
  createUser,
  getAllUsers,
};

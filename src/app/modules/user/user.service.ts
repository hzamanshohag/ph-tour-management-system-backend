import AppError from "../../ErrorHelpers/AppError";
import { IAuthProvider, IUser } from "./user.interface";
import { User } from "./user.model";
import { StatusCodes } from "http-status-codes";
import bcryptjs from "bcryptjs";

const createUser = async (payload: Partial<IUser>) => {
  const { email, password, ...rest } = payload;

   if (!email) {
     throw new AppError(StatusCodes.BAD_REQUEST, "Email is required");
   }

  const isUserExist = await User.findOne({ email });

  if (isUserExist) {
    throw new AppError(StatusCodes.BAD_REQUEST, "This user are already exist");
  }

  const hashedPassword = await bcryptjs.hash(password as string, 10);

  const authProvider: IAuthProvider = { provider: "google", providerId: email };

  const user = await User.create({
    email,
    password: hashedPassword,
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

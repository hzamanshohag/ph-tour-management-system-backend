import { IUser } from "./user.interface";
import { User } from "./user.model";

type CreateUserPayload = Pick<IUser, "name" | "email">;

const createUser = async (payload: CreateUserPayload) => {
  const { name, email } = payload;

  const user = await User.create({
    name,
    email,
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

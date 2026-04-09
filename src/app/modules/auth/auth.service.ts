import { StatusCodes } from "http-status-codes";
import AppError from "../../ErrorHelpers/AppError";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";
import  bcryptjs  from 'bcryptjs';

const credentialslogin = async (payload: Partial<IUser>) => {
  const { email, password } = payload;

  if (!email) {
    throw new AppError(StatusCodes.BAD_REQUEST, "Email is required");
  }

  const isUserExist = await User.findOne({ email });

  if (!isUserExist) {
    throw new AppError(StatusCodes.BAD_REQUEST, "User does not exist");
  }

  const isPasswordMatched = await bcryptjs.compare(
    password as string,
    isUserExist.password as string,
  );

  if(!isPasswordMatched){
    throw new AppError(StatusCodes.BAD_REQUEST, "Incorrect password");
  }


  return {
    email: isUserExist?.email,
  };
};

export const AuthServices = {
  credentialslogin,
};

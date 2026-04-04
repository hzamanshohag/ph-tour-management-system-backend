/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UserServices } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

// const createUser = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const user = await UserServices.createUser(req.body);

//     res.status(StatusCodes.CREATED).json({
//       message: "User created successfully",
//       data: user,
//     });
//   } catch (err: any) {
//     console.log(err);
//     next(err);
//   }
// };

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserServices.createUser(req.body);

    // res.status(StatusCodes.CREATED).json({
    //   message: "User created successfully",
    //   data: user,
    // });
    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      success: true,
      message: "User created successfully",
      data: user,
    });
  },
);

const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await UserServices.getAllUsers();

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "All Users are retrieved successfully",
      data: result.data,
      meta: result.meta,
    });
  },
);

export const UserControllers = {
  createUser,
  getAllUsers,
};

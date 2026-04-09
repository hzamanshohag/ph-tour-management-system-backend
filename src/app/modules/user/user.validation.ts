import z from "zod";
import { IsActive, Role } from "./user.interface";

export const createUserZodSchema = z.object({
  name: z
    .string({ error: "Name must be a string" })
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be at most 50 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/, {
      message: "Password must contain at least 1 uppercase letter",
    })
    .regex(/[\W_]/, {
      message: "Password must contain at least 1 special character",
    })
    .regex(/\d/, { message: "Password must contain at least 1 number" }),
  phone: z
    .string()
    .regex(/^\+8801[3-9]\d{8}$/, {
      message: "Enter a valid Bangladeshi phone number (e.g., +8801XXXXXXXXX)",
    })
    .optional(),
  address: z
    .string()
    .max(200, "Address cannot exceed 200 characters")
    .optional(),
});

export const updateUserZodSchema = z.object({
  name: z
    .string({ error: "Name must be a string" })
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be at most 50 characters" })
    .optional(),
  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/, {
      message: "Password must contain at least 1 uppercase letter",
    })
    .regex(/[\W_]/, {
      message: "Password must contain at least 1 special character",
    })
    .regex(/\d/, { message: "Password must contain at least 1 number" })
    .optional(),
  phone: z
    .string()
    .regex(/^\+8801[3-9]\d{8}$/, {
      message: "Enter a valid Bangladeshi phone number (e.g., +8801XXXXXXXXX)",
    })
    .optional(),
  address: z
    .string()
    .max(200, "Address cannot exceed 200 characters")
    .optional(),
  role: z.enum(Object.values(Role) as [string, ...string[]]).optional(),
  isActive: z.enum(Object.values(IsActive) as [string, ...string[]]).optional(),
  isDeleted: z.boolean({ error: "isDeleted must be true or false" }),
  isVerified: z.boolean({ error: "isVerified must be true or false" }),
});

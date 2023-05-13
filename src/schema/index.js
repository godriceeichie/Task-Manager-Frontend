import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, { message: "Password is not strong enough " }),
});

export const signUpSchema = z
  .object({
    username: z
      .string()
      .min(2, { message: "Username must be at least 2 characters long" })
      .optional(),
    email: z
      .string()
      .email({ message: "Invalid email format!" })
      .min(1, { message: "Please enter a valid email address!" })
      .optional(),
    password: z
      .string()
      .min(5, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z
      .string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
  }) 

// console.log(signUpSchema.parse({password: "asdf" , confirmPassword: "fdsa"}))
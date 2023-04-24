import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, { message: "Password is not strong enough " }),
});

export const signUpSchema = z
  .object({
    username: z
      .string()
      .min(2, { message: "Username must be at least 2 characters long" }),
    email: z
      .string()
      .email({ message: "Invalid email format!" })
      .min(1, { message: "Please enter a valid email address!" }),
    password: z
      .string()
      .min(5, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z
      .string()
      .min(5, { message: "Must be 5 or more characters long" }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
      });
    }
  });

// const userSchema = z.object({
//     username: z.string()
// })

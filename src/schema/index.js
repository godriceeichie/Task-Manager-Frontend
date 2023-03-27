import { z } from "zod";

export const signUpSchema = z.object({
    username:z.string().min(2,{message:"Username should have at least 2 characters"}),
    email:z.string().email({message:"This email is invalid!"}).min(1, {message: "Email required!"}),
    password:z.string().min(6,{message:"Password is not strong enough "})
})

export const loginSchema = z.object({
    email:z.string().email({message:"Invalid email"}),
    password:z.string().min(6,{message:"Password is not strong enough "})
})

const userSchema = z.object({
    username: z.string()
})

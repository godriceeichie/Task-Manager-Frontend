import { z } from "zod";

export const signUpSchema = z.object({
    username:z.string().min(2,{message:"atleast 2 characters"}),
    email:z.string().email({message:"invalid email"}),
    password:z.string().min(6,{message:"password not strong enough "})
})

export const loginSchema = z.object({
    email:z.string().email({message:"invalid email"}),
    password:z.string().min(6,{message:"password not strong enough "})
})
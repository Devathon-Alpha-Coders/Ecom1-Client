import { z } from "zod";

export const signupFormDefaultValues = {
    email: '',
    password: '',
    confirmPassword: ''
}

export const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
}).transform((data) => ({
    email: data.email,
    password: data.password,
}));

export type SignupFormValues = z.infer<typeof signupSchema>;
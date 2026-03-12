import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.email("Invalid email format"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string().min(6, "Password must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type RegisterFormInput = z.input<typeof registerSchema>;
export type RegisterFormOutput = z.output<typeof registerSchema>;

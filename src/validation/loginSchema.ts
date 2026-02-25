import { z } from "zod";

export const loginSchema = z.object({
  email: z.email({ error: "Invalid email format" }),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type LoginFormInput = z.input<typeof loginSchema>;
export type LoginFormOutput = z.output<typeof loginSchema>;

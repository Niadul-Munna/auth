import * as z from "zod";

export const loginSchema = z.object({
  userName: z.string(),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters" })
    .max(32),
});

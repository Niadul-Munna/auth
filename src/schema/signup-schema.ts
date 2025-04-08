import z from "zod";

export const signupSchema = z
  .object({
    firstName: z.string().min(2, { message: "must be at least 2 characters" }),
    lastName: z.string().min(2, { message: "must be at least 2 characters" }),
    email: z.string().email(),
    password: z
      .string()
      .min(4, { message: "Password must be at least 4 characters" })
      .max(32),
    confirmPassword: z
      .string()
      .min(4, {
        message: "Password must be at least 4 characters",
      })
      .max(32),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

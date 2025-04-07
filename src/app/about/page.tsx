"use client";
import { z, ZodType } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  email: string;
  password: string;
};

export default function Home() {
  const schema: ZodType<FormData> = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(4, { message: "Password must be at least 4 characters" })
      .max(32),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const submitData: SubmitHandler<FormData> = (data) => {
    console.log(data);
    console.log("Submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitData)}>
        <div className="flex flex-col mb-3 gap-3 w-1/2">
          <label htmlFor="email">Email :</label>
          <input
            {...register("email")}
            className="border p-2"
            type="email"
            placeholder="example@gmail.com"
          />
          <label htmlFor="password">Password :</label>
          <input
            {...register("password")}
            className="border p-2"
            type="password"
            placeholder="********"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <button className="bg-green-200 p-2" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

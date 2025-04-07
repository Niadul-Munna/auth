"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { z, ZodType } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const schema: ZodType<FormData> = z
    .object({
      name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters" }),
      email: z.string().email(),
      password: z
        .string()
        .min(4, { message: "Password must be at least 4 characters" })
        .max(32),
      confirmPassword: z.string().min(4).max(32),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
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
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Signup</CardTitle>
          <CardDescription>Create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(submitData)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="Name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  {...register("name")}
                  placeholder="John due"
                  required
                />
                {errors.name && (
                  <p className="text-destructive text-sm">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                </div>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword")}
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <Button variant="outline" className="w-full">
                  Sign up with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/auth/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

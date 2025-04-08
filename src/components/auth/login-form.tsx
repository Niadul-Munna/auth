"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schema/login-schema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function LoginForm() {
  const handleSubmit = (data: z.infer<typeof loginSchema>) => {
    alert("Login successful");
    console.log(JSON.stringify(data));
  };
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
    },
  });
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Login</CardTitle>
        <CardDescription>
          Enter your email and password to login
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="max-w-sm w-full flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="m@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="********"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button className="w-full" type="submit">
              Login
            </Button>
            <p className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/signup"
                className="underline underline-offset-4"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

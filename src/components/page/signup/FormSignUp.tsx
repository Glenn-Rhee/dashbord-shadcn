"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import PropagateLoader from "react-spinners/PropagateLoader";
import { formSchema, override } from "@/lib/schemaForm";
import Link from "next/link";
import { signupPost } from "@/lib/fetch/user";

export default function FormSignUp() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const data = {
      username: values.username,
      email: values.email,
      password: values.password,
    };
    const response = await signupPost(data);
    setLoading(false);
    console.log(response);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Username"
                    type="text"
                    {...field}
                    autoComplete="off"
                    autoFocus
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@gmail.com"
                  type="email"
                  {...field}
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="******"
                  type="password"
                  {...field}
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmation Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="******"
                  type="password"
                  {...field}
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Link
          href={"/auth/login"}
          className="mt-4 block text-center text-slate-600 hover:underline"
        >
          Already have an account?
        </Link>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? (
            <PropagateLoader
              cssOverride={override}
              color="#00BFFF"
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            "Sign Up"
          )}
        </Button>
      </form>
    </Form>
  );
}

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
import { loginSchema, override } from "@/lib/schemaForm";
import Link from "next/link";
import { loginPost } from "@/lib/fetch/user";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";
import AlertForm from "@/components/AlertForm";
import { ResponseApiUser } from "@/types/auth";
import { cookies } from "@/lib/Cookies";

export default function FormLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{
    msg: string;
    code: number | string;
  } | null>(null);
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setLoading(true);
    try {
      const response: ResponseApiUser = await loginPost(values);
      if (response.status === "failed") {
        setError({ code: response.statusCode, msg: response.message });
        return;
      }

      router.push("/");
      setError(null);
      cookies.set("qwpt", response.data.token, { path: "/", sameSite: "none" });
      toast.success("Success Login", {
        description: `Welcome back ${response.data.username}`,
      });
      setLoading(true);
    } catch (error) {
      setError({ code: 500, msg: "Internal Server Error" });
    }
  }

  return (
    <Form {...form}>
      <Toaster position="top-right" theme="dark" />
      {error ? <AlertForm errorCode={error.code} message={error.msg} /> : null}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                  autoFocus
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

        <Link
          href={"/auth/signup"}
          className="mt-4 block text-center text-slate-600 hover:underline"
        >
          Haven&apos;t an account?
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
            "Login"
          )}
        </Button>
      </form>
    </Form>
  );
}

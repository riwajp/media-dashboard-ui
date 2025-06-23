"use client";

import Link from "next/link";
import { z } from "zod";
import { Form } from "@/components/Form";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Image from "next/image";
import { useState } from "react";
import axiosClient from "@/axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAuthStore } from "@/stores/authStore";
import { getUserFromToken } from "@/utils";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export default function LoginPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setUser } = useAuthStore();

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    setIsSubmitting(true);
    try {
      const res = await axiosClient.post("/login", data);
      toast.success("Login successful!");
      console.log(res.data.user);

      setUser(res.data.user);
      router.push("/dashboard/home");
    } catch (err: any) {
      const message = err?.response?.data?.error || "Login failed";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-32 bg-base-200">
      {/* Left: Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <h1 className="text-3xl font-bold text-center">Welcome Back!</h1>

          <Form
            schema={loginSchema}
            onSubmit={onSubmit}
            submitLabel="Log In"
            isSubmitting={isSubmitting}
            fields={[
              {
                name: "username",
                type: "text",
                placeholder: "Username",
                icon: <FaUser />,
              },
              {
                name: "password",
                type: "password",
                placeholder: "Password",
                icon: <RiLockPasswordFill />,
              },
            ]}
          />

          <p className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="link link-accent no-underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right: Image */}
      <div className="hidden lg:block relative object-cover">
        <Image
          src="/assets/bg-2.png"
          alt={"Background image"}
          width={900}
          height={900}
          className="w-full h-full rounded-l-[2.5rem]"
        />
      </div>
    </div>
  );
}

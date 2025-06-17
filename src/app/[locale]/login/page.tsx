"use client";

import Link from "next/link";
import { z } from "zod";
import { Form } from "@/components/Form";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const loginSchema = z.object({
  identifier: z.string().min(1, "Username or Email is required"),
  password: z.string().min(1, "Password is required"),
});

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-32 bg-base-200">
      {/* Left: Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <h1 className="text-3xl font-bold text-center">Welcome Back!</h1>

          <Form
            schema={loginSchema}
            onSubmit={(data) => {
              console.log("Login submitted", data);
              // Add login logic here
            }}
            submitLabel="Log In"
            fields={[
              {
                name: "identifier",
                type: "text",
                placeholder: "Username or Email",
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
      <div className="hidden lg:block relative">
        {/* <Image
          src="https://img.freepik.com/premium-photo/image-is-black-background-with-glowing-white-stock-market-graph-world-map-graph-is-rising-indicating-bull-market_14117-198862.jpg"
          alt="Login Illustration"
          fill
          className="object-cover"
        /> */}
      </div>
    </div>
  );
}

"use client";

import { z } from "zod";
import { Form } from "@/components/Form";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { Field } from "@/components/Form";
import axiosClient from "@/axios";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
const schema = z
  .object({
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    agreed: z
      .boolean()
      .refine((val) => val, "You must agree to the privacy policy"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

const fields: Field[] = [
  { name: "username", type: "text", placeholder: "Username", icon: <FaUser /> },
  { name: "email", type: "email", placeholder: "Email", icon: <MdEmail /> },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    icon: <RiLockPasswordFill />,
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    icon: <RiLockPasswordFill />,
  },
  {
    name: "agreed",
    type: "checkbox",
    label: (
      <>
        I have read and agree to the{" "}
        <a
          href="/privacy-policy"
          className="link link-primary text-accent no-underline"
        >
          Privacy Policy
        </a>
      </>
    ),
  },
];

export default function SignupPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: z.infer<typeof schema>) => {
    setIsSubmitting(true);
    try {
      await axiosClient.post("/signup", data);
      toast.success("Signed up successfully!");
      router.push("/login");
    } catch (err: any) {
      const message = err?.response?.data?.error || "Signup failed";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-32 bg-base-200 ">
      <div className="flex items-center justify-center p-2">
        <div className="w-full max-w-md space-y-8">
          <h1 className="text-3xl font-bold text-center">Create Account</h1>
          <Form
            fields={fields}
            schema={schema}
            onSubmit={onSubmit}
            submitLabel={"Sign Up"}
            isSubmitting={isSubmitting}
          />

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="link link-accent no-underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden lg:block relative object-cover ">
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

"use client";

import { z } from "zod";
import { Form } from "@/components/Form"; // adjust path
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { Field } from "@/components/Form";

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

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      console.log(res);

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Signup failed");

      alert("Signup successful!");
      router.push("/login");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-32 bg-base-200 p-8">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <h1 className="text-3xl font-bold text-center">Create Account</h1>
          <Form
            fields={fields}
            schema={schema}
            onSubmit={onSubmit}
            submitLabel="Sign Up"
          />
        </div>
      </div>
      <div className="hidden lg:block relative">
        {/* Right image (optional) */}
      </div>
    </div>
  );
}

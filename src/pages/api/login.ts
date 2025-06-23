import { delay } from "@/utils";
import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"; // put this in .env

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  await delay();

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const users = [
    { username: "riwajp", email: "riwaj@gmail.com", password: "mypassword" },
  ];

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  const tokenPayload = {
    username: user.username,
    email: user.email,
  };

  const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: "24h" });

  const cookie = serialize("accessToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 15 minutes
  });

  res.setHeader("Set-Cookie", cookie);

  return res.status(200).json({ user: user, message: "Login successful" });
}

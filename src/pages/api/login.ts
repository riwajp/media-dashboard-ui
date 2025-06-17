import { delay } from "@/utils";
import { NextResponse } from "next/server";

let users: any[] = [];

export async function POST(req: Request) {
  await delay();

  const { identifier, password } = await req.json();

  const user = users.find(
    (u) =>
      (u.email === identifier || u.username === identifier) &&
      u.password === password
  );

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  return NextResponse.json({ message: "Login successful", user });
}

// Simulate shared users array
export { users };

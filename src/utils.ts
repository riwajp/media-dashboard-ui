import outletsData from "@/../data/outlets.json";
import jwt from "jsonwebtoken";
import type { User } from "@/types";

const mockDataMap: Record<string, any> = {
  outlets: outletsData,
};

export const mockFetch = (endpoint: string): Promise<any> => {
  const delay = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = mockDataMap[endpoint];
      if (data) {
        resolve(data);
      } else {
        reject(new Error(`Endpoint "${endpoint}" not found in mock data.`));
      }
    }, delay);
  });
};

export function delay() {
  return new Promise((res) => setTimeout(res, Math.random() * 1000 + 300));
}

export function getUserFromToken(token: string): User | null {
  try {
    const decoded = jwt.decode(token);
    if (decoded && typeof decoded === "object") {
      // Type assertion — be careful, validate keys if you want
      const user = decoded as User;
      // Optionally check required fields
      if (user.username && user.email) {
        return user;
      }
    }
    return null;
  } catch {
    return null;
  }
}

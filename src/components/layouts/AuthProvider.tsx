// components/AuthProvider.tsx
"use client";

import { ReactNode, useEffect, useState } from "react";
import { useAuthStore } from "@/stores/authStore";
import { getUserFromToken } from "@/utils";
import type { User } from "@/types";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const setUser = useAuthStore((state) => state.setUser);
  const setLoading = useAuthStore((state) => state.setLoading);

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("accessToken");
    if (token) {
      const user = getUserFromToken(token);
      console.log(user);
      setUser(user);
    } else {
      setUser(null);
    }
    setLoading(false);
  }, [setUser, setLoading]);

  return <>{children}</>;
}

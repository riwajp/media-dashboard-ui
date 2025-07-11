"use client";

import React from "react";
import Selector from "./Selector";
import { LuLanguages } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import Search from "./Search";
import ThemeToogle from "./ThemeToogle";
import { useContentStore, Language, TimePeriod } from "@/stores/contentStore";
import { useRouter } from "next/navigation";
import { useScopedI18n } from "@locales/client";
import { useAuthStore } from "@/stores/authStore";
import { IoLogOut } from "react-icons/io5";
import axiosClient from "@/axios";

type HeaderbarProps = {};

const handleLocaleRedirect = (
  locale: Language,
  router: ReturnType<typeof useRouter>
) => {
  // Get current path without query/hash
  const path = window.location.pathname;
  const parts = path.split("/").filter(Boolean);

  // Replace the first segment with the new locale
  if (parts.length === 0) {
    // If root path, just add locale
    router.push(`/${locale}`);
    return;
  }

  parts[0] = locale;
  const newPath = "/" + parts.join("/");

  router.push(newPath);
};

const Headerbar: React.FC<HeaderbarProps> = () => {
  const { locale, setLocale, period, setPeriod } = useContentStore();
  const { isAuthenticated, resetAuth, setLoading } = useAuthStore();

  const router = useRouter();
  const t = useScopedI18n("header");

  const handleLogout = () => {
    setLoading(true);
  };

  return (
    <div className="flex bg-base-100 justify-between items-center w-full px-4 py-4">
      <div className="flex gap-4 items-center">
        <ThemeToogle />
        <Selector
          value={locale}
          icon={<LuLanguages />}
          options={[Language.EN, Language.NP]}
          onSelect={(op: Language) => {
            setLocale(op);
            if (op != locale) handleLocaleRedirect(op, router);
          }}
        />
        <Selector
          value={period}
          icon={<FaCalendarAlt className="text-warning" />}
          options={[TimePeriod.DAILY, TimePeriod.WEEKLY, TimePeriod.MONTHLY]}
          onSelect={(op: TimePeriod) => setPeriod(op)}
          renderOption={(op: TimePeriod) => {
            return t(op as any);
          }}
          renderValue={(op: TimePeriod) => t(op.toLocaleLowerCase() as any)}
        />
      </div>

      <div className="flex gap-4">
        <Search />

        {!isAuthenticated && (
          <button
            className="btn btn-accent px-10 py-2 rounded-md h-11 min-h-11"
            onClick={() => router.push("/login")}
          >
            LOGIN
          </button>
        )}

        {!!isAuthenticated && (
          <button
            className="btn btn-info px-2 py-1 rounded-md h-11 min-h-11"
            onClick={() => {
              resetAuth();
            }}
          >
            <IoLogOut className="text-xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Headerbar;

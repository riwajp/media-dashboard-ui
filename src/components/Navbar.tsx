"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useScopedI18n } from "@locales/client";

type NavbarProps = {
  isHidden?: boolean;
};

type NavbarLinkProps = { href: string; label: string; isActive?: boolean };

const Navbar: React.FC<NavbarProps> = ({ isHidden }) => {
  const pathname = usePathname();
  const t = useScopedI18n("navbar");

  return (
    <div className="bg-base-200 w-full h-full rounded-r-2xl flex flex-col px-4 py-8 justify-between items-center ">
      <div className="flex flex-col items-center gap-12 w-full ">
        <div className="text-4xl border-accent text-accent font-bold border-2 p-4 w-full text-center">
          LOGO
        </div>
        <div className="flex flex-col gap-2 w-full ">
          <NavbarLink
            href="/dashboard/stories"
            label={t("stories")}
            isActive={pathname.includes("/dashboard/stories")}
          />
          <NavbarLink
            href="/dashboard/graphs"
            label={t("graphs")}
            isActive={pathname.includes("/dashboard/graphs")}
          />
          <NavbarLink
            href="/dashboard/alerts"
            label={t("alerts")}
            isActive={pathname.includes("/dashboard/alerts")}
          />
          <NavbarLink
            href="/dashboard/outlets"
            label={"Outlets"}
            isActive={pathname.includes("/dashboard/outlets")}
          />
        </div>
      </div>

      <div className="text-4xl border-accent text-accent font-bold border-2 p-4 w-full text-center">
        FOOTER
      </div>
    </div>
  );
};

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, label, isActive }) => {
  return (
    <Link
      href={href}
      className={`w-full px-3 py-3 text-md rounded-lg  transition-all duration-300 ${
        isActive
          ? "bg-accent font-semibold hover:bg-accent"
          : "hover:bg-secondary"
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;

"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useScopedI18n } from "@locales/client";

import { AiFillHome } from "react-icons/ai";
import { FaProjectDiagram, FaNewspaper } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import { FiChevronLeft, FiChevronRight, FiChevronsRight } from "react-icons/fi";

type NavbarProps = {
  isCollapsed: boolean;
  setIsCollapsed: any;
};

type NavbarLinkProps = {
  href: string;
  label: string;
  isActive?: boolean;
  icon: React.ReactNode;
};

const Navbar: React.FC<NavbarProps> = ({ isCollapsed, setIsCollapsed }) => {
  const pathname = usePathname();
  const t = useScopedI18n("navbar");

  return (
    <div
      className={`relative bg-base-200 h-full rounded-r-2xl flex flex-col ${
        isCollapsed ? "px-2" : "px-4"
      } py-6 justify-between items-center transition-all duration-300 s-full`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-1/2 right-[-12px] bg-base-300 hover:bg-base-100 text-accent border border-accent rounded-full p-1 transition-all "
      >
        {isCollapsed ? (
          <FiChevronRight className="text-lg" />
        ) : (
          <FiChevronLeft className="text-lg" />
        )}
      </button>

      <div className="flex flex-col items-center gap-12 w-full">
        {/* Logo with Toggle Button */}
        <div className="text-xl font-bold border-2 border-accent text-accent px-2 py-1 w-full text-center rounded-md">
          {isCollapsed ? "L" : "LOGO"}
        </div>

        {/* Nav Links */}
        <div className="flex flex-col gap-3 w-full">
          <NavbarLink
            href="/dashboard/home"
            label={t("home")}
            icon={<AiFillHome />}
            isActive={pathname?.includes("/dashboard/home")}
            isCollapsed={isCollapsed}
          />
          <NavbarLink
            href="/dashboard/graphs"
            label={t("graphs")}
            icon={<FaProjectDiagram />}
            isActive={pathname?.includes("/dashboard/graphs")}
            isCollapsed={isCollapsed}
          />
          <NavbarLink
            href="/dashboard/alerts"
            label={t("alerts")}
            icon={<IoMdAlert />}
            isActive={pathname?.includes("/dashboard/alerts")}
            isCollapsed={isCollapsed}
          />
          <NavbarLink
            href="/dashboard/outlets"
            label={t("outlets")}
            icon={<FaNewspaper />}
            isActive={pathname?.includes("/dashboard/outlets")}
            isCollapsed={isCollapsed}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="text-xl font-bold border-2 border-accent text-accent px-2 py-1 w-full text-center rounded-md">
        {isCollapsed ? "F" : "FOOTER"}
      </div>
    </div>
  );
};

const NavbarLink: React.FC<NavbarLinkProps & { isCollapsed?: boolean }> = ({
  href,
  label,
  isActive,
  icon,
  isCollapsed,
}) => {
  return (
    <Link
      href={href}
      className={`w-full px-3 py-2 text-md rounded-lg flex items-center transition-all duration-300 ${
        isActive
          ? "bg-accent font-semibold hover:bg-accent"
          : "hover:bg-secondary"
      } ${isCollapsed ? "justify-center" : "gap-3"}`}
    >
      <span className="text-lg">{icon}</span>
      {!isCollapsed && <span>{label}</span>}
    </Link>
  );
};

export default Navbar;

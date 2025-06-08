"use client";

import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useThemeStore } from "@/stores/themeStore";

type ThemeToggleProps = {};

const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  const { toggleTheme } = useThemeStore();
  return (
    <label
      className="swap swap-rotate bg-base-300 rounded-lg p-1 w-12 h-11 cursor-pointer hover:bg-base-200 transition-all duration-200 text-sm"
      onClick={() => {
        console.log("ss");
        toggleTheme();
      }}
    >
      {/* hidden checkbox to toggle theme */}
      <input type="checkbox" className="theme-controller" value="synthwave" />

      <FiSun className="swap-off  text-xl" />

      <FiMoon className="swap-on  text-xl" />
    </label>
  );
};

export default ThemeToggle;

"use client";

import React, { useRef, useEffect, useState } from "react";
import { HiSelector } from "react-icons/hi";

type SelectorProps = {
  label: string;
  icon?: React.ReactNode;
  options: string[];
};

const Selector: React.FC<SelectorProps> = ({ label, icon, options }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-50" ref={ref}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex justify-between items-center gap-2 cursor-pointer p-3 rounded-xl hover:bg-base-200 duration-300 w-full"
      >
        <div className="text-xl text-accent">{icon}</div>
        <div className="text-base-content font-semibold">{label}</div>
        <HiSelector className="text-2xl text-accent" />
      </button>

      <div
        className={`absolute p-2 top-14 w-full rounded-lg bg-base-300 shadow-2xl transition-all duration-200 origin-top ${
          open
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {options.map((option) => (
          <div
            key={option}
            className="p-2 text-md font-semibold hover:bg-base-200 rounded-lg cursor-pointer transition duration-200"
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selector;

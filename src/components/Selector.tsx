"use client";

import React, { useRef, useEffect, useState } from "react";
import { HiSelector } from "react-icons/hi";

type SelectorProps = {
  icon?: React.ReactNode;
  value?: string;
  options: string[];
  onSelect?: (value: any) => void;
  renderValue?: (value: any) => React.ReactNode;
  renderOption?: (option: any) => React.ReactNode;
};

const Selector: React.FC<SelectorProps> = ({
  icon,
  options,
  value,
  onSelect,
  renderValue,
  renderOption,
}) => {
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
        <div className="text-lg text-accent">{icon}</div>
        <div className="text-base-content">
          {renderValue ? renderValue(value || "") : value}
        </div>
        <HiSelector className="text-xl text-accent" />
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
            onClick={() => {
              onSelect?.(option);
              setOpen(false);
            }}
          >
            {renderOption ? renderOption(option) : option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selector;

import React from "react";
import { getScopedI18n } from "@locales/server";
import Selector from "./Selector";
import { LuLanguages } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import Search from "./Search";
import ThemeToogle from "./ThemeToogle";

type HeaderbarProps = {};

const Headerbar: React.FC<HeaderbarProps> = () => {
  return (
    <div className="flex justify-between items-center w-full px-6 py-6">
      <div className="flex gap-6 items-center">
        <ThemeToogle />
        <Selector
          label="Nepali"
          icon={<LuLanguages />}
          options={["English", "Nepali"]}
        />
        <Selector
          label="Monthly"
          icon={<FaCalendarAlt className="text-warning" />}
          options={["Daily", "Weekly", "Monthly"]}
        />
      </div>

      <div className="flex gap-4">
        <Search />
        <button className="btn btn-accent px-10 py-2 rounded-sm">LOGIN</button>
      </div>
    </div>
  );
};

export default Headerbar;

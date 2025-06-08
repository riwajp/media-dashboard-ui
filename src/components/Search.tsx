import React from "react";
import { IoSearch } from "react-icons/io5";

type SearchProps = {};

const Search: React.FC<SearchProps> = () => {
  return (
    <div className="flex gap-2 items-center">
      <label className="input bg-base-300 flex items-center gap-2 text-accent h-11 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          className="grow text-base-content "
          placeholder="Search"
        />
      </label>

      <button className="btn btn-square btn-ghost p-1  rounded-lg text-accent text-lg bg-base-300 hover:bg-base-200 min-h-11  h-11">
        <IoSearch />
      </button>
    </div>
  );
};

export default Search;

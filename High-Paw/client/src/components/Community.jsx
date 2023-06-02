import React from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "./ThemeProvider";

function Community() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div
      className={`communityContainer flex flex-col items-start ${
        theme === "light"
          ? "bg-white text-stone-700"
          : "bg-black text-green-100"
      }   h-3/4 w-full md:w-48 md:h-3/4 px-4 pb-0 m-auto`}
    >
      <h1 className="h1 mb-2 font-bold md:text-2xl text-xl ">Community</h1>
      <Link
        to="/recipes"
        className="md:text-lg text-sm  cursor-pointer hover:scale-125 transition hover:text-green-600 hover:overline mb-1 flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#379237"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#16FF00"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
        <h2>Recipes</h2>
      </Link>
      <Link
        to="/lifestyle"
        className="md:text-lg text-sm  cursor-pointer hover:scale-125 transition hover:text-green-600 hover:overline mb-1 flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#379237"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#16FF00"
          className="w-6 h-6  "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>

        <h2>Lifestyle</h2>
      </Link>
      <Link
        to="/facts"
        className="md:text-lg text-sm  cursor-pointer hover:scale-125 transition hover:text-green-600 hover:overline mb-1 flex "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#379237"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#16FF00"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>

        <h2>Facts</h2>
      </Link>
    </div>
  );
}

export default Community;

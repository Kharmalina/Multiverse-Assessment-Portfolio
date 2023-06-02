import React from "react";
import { useThemeContext } from "./ThemeProvider";
function LifeStyle() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div
      className={`w-screen h-screen overflow-y-clip flex flex-col items-center justify-center px-4 space-y-4 ${
        theme === "light" ? "text-green-900" : "text-green-100"
      }`}
    >
      <h1 className="md:text-4xl text-2xl font-bold animate-pulse">
        LifeStyle Coming Soon
      </h1>
      <p className="md:text-md text-sm">
        We're working hard to bring you something amazing. Stay tuned!
      </p>
    </div>
  );
}

export default LifeStyle;

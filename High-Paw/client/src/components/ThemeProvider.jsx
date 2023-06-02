import { useState, useContext } from "react";

import { createContext } from "react";

export const ThemeContext = createContext();
// ThemeProvider component that wraps the entire app and provides the theme context to all components
// children is the prop that is passed to all components
function ThemeProvider({ children }) {
  // get theme from local storage or set to light if no theme is set in local storage
  const storageTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storageTheme || "light");

  const toggleTheme = () => {
    if (theme === "light") {
      // if theme is light, set theme to dark and save to local storage
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    // ThemeContext.Provider component that provides the theme and toggleTheme function to all components , value is the prop that is passed to all components
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
// custom hook to use the theme context in any component that needs it (no need to import useContext and ThemeContext) , returns the theme and toggleTheme function
export const useThemeContext = () => useContext(ThemeContext);

export default ThemeProvider;

import { createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { useContext } from "react";
import { useEffect } from "react";

const darkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  function darkModeToggle() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  return (
    <darkModeContext.Provider value={{ isDarkMode, darkModeToggle }}>
      {children}
    </darkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(darkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
}

export { useDarkMode, DarkModeProvider };

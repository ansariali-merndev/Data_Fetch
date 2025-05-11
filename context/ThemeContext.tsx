"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  // const [isDark, setIsDark] = useState(() => {
  //   if (typeof window !== "undefined") {
  //     return localStorage.getItem("isDark") === "true";
  //   }
  //   return false;
  // });

  useEffect(() => {
    const darkMode = localStorage.getItem("isDark");
    setIsDark(darkMode === "true");
  }, []);

  function toggleTheme() {
    setIsDark((prev) => {
      const updated = !prev;
      localStorage.setItem("isDark", JSON.stringify(updated));
      return updated;
    });
  }

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const value = {
    isDark,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

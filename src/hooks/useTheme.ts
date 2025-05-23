import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

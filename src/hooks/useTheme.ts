import { useEffect } from "react";

const THEME_KEY = "tolu-theme";

export function useTheme() {
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = savedTheme || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", nextTheme);
  }, []);

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(THEME_KEY, next);
  };

  return { toggleTheme };
}
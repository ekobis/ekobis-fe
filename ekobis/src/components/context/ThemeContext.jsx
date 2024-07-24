import React, { createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("day"); // Varsayılan tema "day"

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "day" ? "night" : "day"));
  };

  const themeClasses = {
    day: {
      background: "bg-white",
      text: "text-black",
      border: "border-dayBorder", // Doğru sınıf adı
      shadow: "shadow-dayShadow", // Doğru sınıf adı
    },
    night: {
      background: "bg-black",
      text: "text-white",
      border: "border-nightBorder", // Doğru sınıf adı
      shadow: "shadow-nightShadow", // Doğru sınıf adı
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeClasses }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;

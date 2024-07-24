import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export function useThemeClasses() {
  const { theme, themeClasses } = useContext(ThemeContext);

  return themeClasses[theme]; // Temanın güncel stil sınıflarını döndür
}

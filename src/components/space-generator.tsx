import { useEffect } from "react";
import "@/styles/space.css";
import { useTheme } from "./theme/theme-provider";
import { COLORS_DARK, COLORS_LIGHT } from "@/utils/color";

const generateSpaceLayer = (
  size: string,
  selector: string,
  totalStars: number,
  duration: string,
  colors: string[]
) => {
  const layer = [];
  for (let i = 0; i < totalStars; i++) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
  }

  const container = document.querySelector(selector) as HTMLElement;
  if (container) {
    container.style.setProperty("--size", size);
    container.style.setProperty("--space-layer", layer.join(","));
    container.style.setProperty("--duration", duration);
  }
};

export const Space = () => {
  const { theme } = useTheme();
  useEffect(() => {
    const starColor = theme === "dark" ? "#fff" : "#000";
    const colors = theme === "dark" ? COLORS_DARK : COLORS_LIGHT;

    document.documentElement.style.setProperty("--star-color", starColor);

    generateSpaceLayer("1px", ".space-1", 200, "25s", colors);
    generateSpaceLayer("2px", ".space-2", 100, "20s", colors);
    generateSpaceLayer("4px", ".space-3", 25, "15s", colors);
  }, [theme]);

  return (
    <div className="container">
      <div className="space space-1"></div>
      <div className="space space-2"></div>
      <div className="space space-3"></div>
    </div>
  );
};

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num.toString();
}

export function getRandomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function generateSparkles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 4,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2,
  }));
}

export const techColors: Record<string, { bg: string; text: string; glow: string }> = {
  JavaScript: { bg: "rgba(255, 220, 50, 0.15)", text: "#B8860B", glow: "rgba(255, 220, 50, 0.4)" },
  TypeScript: { bg: "rgba(50, 150, 255, 0.15)", text: "#1565C0", glow: "rgba(50, 150, 255, 0.4)" },
  React: { bg: "rgba(100, 220, 255, 0.15)", text: "#0277BD", glow: "rgba(100, 220, 255, 0.4)" },
  "Next.js": { bg: "rgba(0, 0, 0, 0.08)", text: "#1A1A1A", glow: "rgba(0, 0, 0, 0.2)" },
  "Node.js": { bg: "rgba(80, 200, 100, 0.15)", text: "#2E7D32", glow: "rgba(80, 200, 100, 0.4)" },
  TailwindCSS: { bg: "rgba(50, 200, 210, 0.15)", text: "#00838F", glow: "rgba(50, 200, 210, 0.4)" },
  Python: { bg: "rgba(100, 150, 255, 0.15)", text: "#1565C0", glow: "rgba(100, 150, 255, 0.4)" },
  PostgreSQL: { bg: "rgba(50, 100, 200, 0.15)", text: "#1A237E", glow: "rgba(50, 100, 200, 0.4)" },
  Prisma: { bg: "rgba(100, 80, 200, 0.15)", text: "#4527A0", glow: "rgba(100, 80, 200, 0.4)" },
  "Git & GitHub": { bg: "rgba(255, 100, 50, 0.15)", text: "#BF360C", glow: "rgba(255, 100, 50, 0.4)" },
  "API Development": { bg: "rgba(255, 150, 200, 0.15)", text: "#880E4F", glow: "rgba(255, 150, 200, 0.4)" },
  Docker: { bg: "rgba(50, 150, 255, 0.15)", text: "#0D47A1", glow: "rgba(50, 150, 255, 0.4)" },
};

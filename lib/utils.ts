import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitialsFromName(name: string) {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter((part) => /[a-zA-Z0-9]/.test(part))
    .slice(0, 2)

  return parts.map((part) => part[0]).join("").toUpperCase()
}

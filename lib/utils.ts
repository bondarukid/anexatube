import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitialsFromName(name: string) {

  if(!name || typeof name !== "string") return ""

  const parts = name
    .trim()
    .split(/\s+/)
    .filter((part) => /[a-zA-Z0-9]/.test(part))
    .slice(0, 2)

  return parts.map((part) => part[0]).join("").toUpperCase()
}

export function formatSecondsToDuration(totalSeconds: number): string {
  if (totalSeconds <= 0) return "0:00"
  const hrs = Math.floor(totalSeconds / 3600)
  const mins = Math.floor((totalSeconds % 3600) / 60)
  const secs = totalSeconds % 60

  const paddedSecs = secs.toString().padStart(2, '0')

  if (hrs > 0) {
    const paddedMins = mins.toString().padStart(2, '0')
    return `${hrs}:${paddedMins}:${paddedSecs}`
  }

  return `${mins}:${paddedSecs}`
}

function formatScaledCount(value: number, suffix: string): string {
  const formatted =
    value >= 10
      ? Math.round(value).toString()
      : value.toFixed(1).replace(/\.0$/, "").replace(".", ",")

  return `${formatted} ${suffix}`
}

export function formatViewCount(views: string | number): string {
  const count = Number(views)

  if (!Number.isFinite(count) || count < 0) return "0"

  if (count >= 1_000_000_000) {
    return formatScaledCount(count / 1_000_000_000, "млрд")
  }

  if (count >= 1_000_000) {
    return formatScaledCount(count / 1_000_000, "М")
  }

  if (count >= 1_000) {
    return formatScaledCount(count / 1_000, "тыс.")
  }

  return count.toString()
}

export function formatRelativeTime(
  date: string | Date,
  now: Date = new Date(),
): string {
  const published = typeof date === "string" ? new Date(date) : date

  if (Number.isNaN(published.getTime())) return ""

  const diffMs = now.getTime() - published.getTime()

  if (diffMs < 0) return "just now"

  const seconds = Math.floor(diffMs / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)
  const months = Math.floor(days / 30)
  const years = Math.floor(days / 365)

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "always" })

  if (seconds < 60) {
    return seconds < 10 ? "just now" : rtf.format(-Math.max(seconds, 1), "second")
  }

  if (minutes < 60) return rtf.format(-minutes, "minute")
  if (hours < 24) return rtf.format(-hours, "hour")
  if (days === 1) return "yesterday"
  if (days < 7) return rtf.format(-days, "day")
  if (weeks < 5) return rtf.format(-weeks, "week")
  if (months < 12) return rtf.format(-months, "month")

  return rtf.format(-Math.max(years, 1), "year")
}

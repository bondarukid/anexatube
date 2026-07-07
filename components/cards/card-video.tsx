"use client"

import * as React from "react"
import { MoreVertical, Play, VolumeX } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  cn,
  formatRelativeTime,
  formatSecondsToDuration,
  formatViewCount,
  getInitialsFromName,
} from "@/lib/utils"

const videoProgressClassName =
  "absolute bottom-0 left-0 z-10 flex w-full flex-col gap-0 rounded-none border-none [&_[data-slot=progress-track]]:h-0.75 [&_[data-slot=progress-track]]:w-full [&_[data-slot=progress-track]]:rounded-none [&_[data-slot=progress-track]]:bg-neutral-800/60 [&_[data-slot=progress-indicator]]:bg-red-600 [&_[data-slot=progress-indicator]]:transition-none"

interface CardVideoProps {
  title: string
  channelName: string
  channelAvatarUrl?: string
  views: string | number
  publishedAt: string | Date
  duration: string
  progressPercentage?: number
}

export function CardVideo({
  title,
  channelName,
  channelAvatarUrl,
  views,
  publishedAt,
  duration,
  progressPercentage = 0,
}: CardVideoProps) {
  const initials = getInitialsFromName(channelName)
  const totalSeconds = Math.max(0, Number(duration) || 0)
  const publishedLabel = formatRelativeTime(publishedAt)

  const [hovered, setHovered] = React.useState(false)
  const [elapsed, setElapsed] = React.useState(0)
  const rafRef = React.useRef(0)
  const startRef = React.useRef(0)

  const stopPreview = React.useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    setHovered(false)
    setElapsed(0)
  }, [])

  const startPreview = React.useCallback(() => {
    if (totalSeconds <= 0) return

    setHovered(true)
    startRef.current = performance.now()

    const tick = (now: number) => {
      const next = Math.min((now - startRef.current) / 1000, totalSeconds)
      setElapsed(next)

      if (next < totalSeconds) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
  }, [totalSeconds])

  React.useEffect(() => () => cancelAnimationFrame(rafRef.current), [])

  const previewProgress =
    totalSeconds > 0 ? (elapsed / totalSeconds) * 100 : 0
  const timeLabel = hovered
    ? formatSecondsToDuration(Math.max(0, Math.ceil(totalSeconds - elapsed)))
    : formatSecondsToDuration(totalSeconds)

  return (
    <Card
      variant="video"
      className="group cursor-pointer rounded-xl border-none! bg-transparent p-3 shadow-none transition-colors duration-200 hover:bg-muted/70"
    >
      <CardContent
        className={cn(
          "relative aspect-video w-full overflow-hidden rounded-xl p-0 transition-colors duration-200",
          hovered ? "bg-muted" : "bg-slate-900",
        )}
        onMouseEnter={startPreview}
        onMouseLeave={stopPreview}
      >
        {!hovered && (
          <div className="absolute inset-0 bg-linear-to-br from-indigo-950 via-slate-900 to-zinc-900 opacity-80" />
        )}

        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
          <div className="rounded bg-black/80 p-1 text-white backdrop-blur-sm">
            <VolumeX className="h-4 w-4" />
          </div>
          <Label className="rounded bg-black/80 px-1.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
            CC
          </Label>
        </div>

        <Label className="absolute right-3 bottom-3 z-10 flex items-center gap-1 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white">
          {timeLabel}
        </Label>

        {hovered && totalSeconds > 0 && (
          <Progress value={previewProgress} className={videoProgressClassName} />
        )}

        {!hovered && progressPercentage > 0 && (
          <Progress
            value={progressPercentage}
            className={cn(videoProgressClassName, "hidden group-hover:block")}
          />
        )}
      </CardContent>

      <div className="mt-0 flex gap-3">
        <Avatar className="h-9 w-9 shrink-0 select-none">
          <AvatarImage src={channelAvatarUrl} alt={channelName} />
          <AvatarFallback className="bg-linear-to-tr from-amber-700 to-orange-500 text-xs font-semibold text-white">
            {initials}
          </AvatarFallback>
        </Avatar>

        <div className="relative flex w-full flex-col pr-6">
          <Label className="line-clamp-2 text-sm leading-snug font-semibold text-foreground">
            {title}
          </Label>

          <div className="mt-1 flex flex-col text-muted-foreground">
            <div className="mt-0.5 flex items-center gap-1">
                <Label className={"text-xs transition-colors hover:text-foreground"}>{channelName}</Label>
                <div className="flex items-center gap-1">
                  <Play size={8} />
                  <Label>{formatViewCount(views)}</Label>
              </div>
              <span>•</span>
              <Label>{publishedLabel}</Label>
            </div>
          </div>

          <button
            type="button"
            className="absolute top-0 right-0 p-1 text-muted-foreground opacity-0 transition-opacity duration-150 hover:text-foreground group-hover:opacity-100"
          >
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Card>
  )
}

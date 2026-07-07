import { CardVideo } from "@/components/cards/card-video"
import { SkeletonVideo } from "@/components/skeleton/skeleton-video"
import { Skeleton } from "@/components/ui/skeleton"
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
      <div className="flex flex-col gap-8 p-4">
        <section className="grid auto-rows-min gap-4 md:grid-cols-3">
          <CardVideo
              title="Building a Full-Stack YouTube Clone with Next.js 16 and Postgres"
              channelName="CodeWithAntonio"
              views="45200"
              publishedAt="2026-06-23T14:30:00Z"
              duration="285"
          />
          <CardVideo
              title="Why Everyone is Switching from Vite to Turbopack This Year"
              channelName="TechEdge"
              views="12800"
              publishedAt="2026-02-10T09:15:00Z"
              duration="190"
          />
          <CardVideo
              title="Lo-Fi Beats for Intense Programming Sessions ☕"
              channelName="The Coding Cafe"
              views="894300"
              publishedAt="2024-11-15T18:00:00Z"
              duration="300"
          />

          <SkeletonVideo />
          <SkeletonVideo />
          <SkeletonVideo />
        </section>

        <section className={"p-2"}>
          <Label className="mb-3 text-2xl font-semibold">Shorts</Label>
          <Skeleton className="h-100 w-full rounded-xl bg-muted/80" />
        </section>

        <section className="grid auto-rows-min gap-4 md:grid-cols-3">
          <SkeletonVideo />
          <SkeletonVideo />
          <SkeletonVideo />
        </section>

        <section className={"p-2"}>
          <Label className="mb-3 text-2xl font-semibold">Shorts</Label>
          <Skeleton className="h-100 w-full rounded-xl bg-muted/80" />
        </section>

        <section className="grid auto-rows-min gap-4 md:grid-cols-3">
          <SkeletonVideo />
          <SkeletonVideo />
          <SkeletonVideo />
          <SkeletonVideo />
          <SkeletonVideo />
          <SkeletonVideo />
          <SkeletonVideo />
          <SkeletonVideo />
          <SkeletonVideo />
          <SkeletonVideo />
          <SkeletonVideo />
          <SkeletonVideo />
          <SkeletonVideo />
          <SkeletonVideo />
          <SkeletonVideo />
        </section>
      </div>
  )
}

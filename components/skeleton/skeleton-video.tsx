import { Card, CardContent} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import {Play} from "lucide-react";

export function SkeletonVideo() {
    return (
        <Card variant={"video"} className="w-full rounded-xl p-3 bg-transparent ring-0">

            {/* 1. Video Preview */}
            <CardContent className="p-0 relative aspect-video w-full overflow-hidden rounded-xl">
                <Skeleton className="h-full w-full bg-muted/80 rounded-xl animate-pulse" />
            </CardContent>

            {/* 2. Video Info */}
            <div className="mt-0 flex gap-3">
                {/* Avatar */}
                <Skeleton className="h-9 w-9 rounded-full shrink-0 bg-muted/80 animate-pulse" />

                {/* Text block */}
                <div className="flex flex-col pr-6 relative w-full gap-1">
                    {/* Video title */}
                    <Skeleton className="h-4 w-[95%] bg-muted/80 rounded animate-pulse" />
                    <Skeleton className="h-4 w-[75%] bg-muted/80 rounded animate-pulse" />

                    {/* Video meta data */}
                    <div className="mt-1 flex items-center gap-2">
                        {/* Channel name */}
                        <Skeleton className="h-3 w-[25%] bg-muted/60 rounded animate-pulse" />
                        <span className="text-muted-foreground/40 text-xs">•</span>
                        {/* Views */}
                        <Play size={8}/>
                        <Skeleton className="h-3 w-[20%] bg-muted/60 rounded animate-pulse" />
                        <span className="text-muted-foreground/40 text-xs">•</span>
                        {/* Publish date */}
                        <Skeleton className="h-3 w-[15%] bg-muted/60 rounded animate-pulse" />
                    </div>
                </div>
            </div>
        </Card>
    )
}
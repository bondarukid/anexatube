import { headers } from "next/headers"

import {
  buildConsumerUrl,
  buildStudioUrl,
  type SiteUrls,
} from "@/lib/urls"

export async function getSiteUrls(): Promise<SiteUrls> {
  const headersList = await headers()
  const host = headersList.get("host") ?? "localhost:3000"
  const protocol = headersList.get("x-forwarded-proto") ?? "http"

  return {
    consumerUrl: buildConsumerUrl(host, "/", `${protocol}:`),
    studioUrl: buildStudioUrl(host, "/", `${protocol}:`),
  }
}

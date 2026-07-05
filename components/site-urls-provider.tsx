"use client"

import * as React from "react"

import type { SiteUrls } from "@/lib/urls"

const SiteUrlsContext = React.createContext<SiteUrls | null>(null)

export function SiteUrlsProvider({
  urls,
  children,
}: {
  urls: SiteUrls
  children: React.ReactNode
}) {
  return (
    <SiteUrlsContext.Provider value={urls}>{children}</SiteUrlsContext.Provider>
  )
}

export function useSiteUrls() {
  const urls = React.useContext(SiteUrlsContext)

  if (!urls) {
    throw new Error("useSiteUrls must be used within SiteUrlsProvider")
  }

  return urls
}

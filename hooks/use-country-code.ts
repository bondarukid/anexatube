"use client"

import * as React from "react"

import { getBrowserLocaleCountryCode } from "@/lib/geolocation/country-code"

export function useCountryCode() {
  return React.useSyncExternalStore(
    () => () => {},
    getBrowserLocaleCountryCode,
    () => null,
  )
}

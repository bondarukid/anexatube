const LOCALE_COUNTRY_PATTERN = /-([A-Z]{2})$/i

export function getCountryCodeFromLocale(locale: string) {
  const match = locale.match(LOCALE_COUNTRY_PATTERN)
  return match?.[1]?.toUpperCase() ?? null
}

export function getBrowserLocaleCountryCode() {
  if (typeof navigator === "undefined") {
    return null
  }

  const locales = [navigator.language, ...navigator.languages]

  for (const locale of locales) {
    const countryCode = getCountryCodeFromLocale(locale)
    if (countryCode) {
      return countryCode
    }
  }

  return null
}

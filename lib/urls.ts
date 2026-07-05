export type SiteUrls = {
  consumerUrl: string
  studioUrl: string
}

function getBaseHost(hostname: string) {
  return hostname.replace(/^studio\./, "")
}

function parseHostHeader(hostHeader: string) {
  const [hostname, port = ""] = hostHeader.split(":")
  return { hostname, port }
}

function buildSubdomainUrl(
  subdomain: "studio" | null,
  path: string,
  protocol: string,
  hostname: string,
  port: string,
) {
  const baseHost = getBaseHost(hostname)
  const host = subdomain ? `${subdomain}.${baseHost}` : baseHost
  const portSuffix = port ? `:${port}` : ""
  const normalizedPath = path.startsWith("/") ? path : `/${path}`

  return `${protocol}//${host}${portSuffix}${normalizedPath}`
}

export function buildStudioUrl(
  hostHeader: string,
  path = "/",
  protocol = "http:",
) {
  const { hostname, port } = parseHostHeader(hostHeader)
  return buildSubdomainUrl("studio", path, protocol, hostname, port)
}

export function buildConsumerUrl(
  hostHeader: string,
  path = "/",
  protocol = "http:",
) {
  const { hostname, port } = parseHostHeader(hostHeader)
  return buildSubdomainUrl(null, path, protocol, hostname, port)
}

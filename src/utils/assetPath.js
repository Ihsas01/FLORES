// Prefix asset paths with Vite's base so they work when the site is served from a sub-path.
const withBase = (relativePath) => {
  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const normalizedPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath
  return `${normalizedBase}${normalizedPath}`
}

export default withBase


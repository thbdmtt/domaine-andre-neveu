/**
 * Résout les chemins d'accès aux actifs statiques en tenant compte de la base Vite
 * (ex: '/' en local, '/domaine-andre-neveu/' sur GitHub Pages).
 */
export function asset(path) {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}

export function formatReadTime(minutes) {
  return `${minutes} min read`
}

export function truncate(text, max = 120) {
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text
}

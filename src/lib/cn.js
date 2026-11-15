/** Join class names, skipping falsy values. Keeps us free of a clsx dependency. */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

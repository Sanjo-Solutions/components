export function classNames(
  ...classNames: (string | null | undefined | boolean)[]
): string {
  return classNames.filter(Boolean).join(" ")
}

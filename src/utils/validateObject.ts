export default function validateObject<T extends object>(
  objectToCheck: T,
  keys: (keyof T)[]
): Record<string, never> | T {
  for (const key of keys) {
    if (!(key in objectToCheck)) {
      return {};
    }
  }

  return objectToCheck;
}

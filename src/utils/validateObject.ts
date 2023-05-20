export default function validateObject<T extends object>(
  objectToCheck: T,
  keys: (keyof T)[]
): null | T {
  for (const key of keys) {
    if (!(key in objectToCheck)) {
      return null;
    }
  }

  return objectToCheck;
}

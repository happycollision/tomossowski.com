export function shuffle(arrayIn: any[]) {
  const array = [...arrayIn]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export function wrappingModulo(index: number, modulus: number) {
  if (modulus < 1)
    throw new Error("Cannot have a modulus less than one. Given: " + modulus)

  while (index < 0) {
    index += modulus
  }

  return index % modulus
}

export function wrappingSlice<T>(
  array: T[],
  currentIndex: number,
  items: number,
): T[] {
  return Array.from({ length: items }).map(
    (_, i) => array[wrappingModulo(currentIndex + i, array.length)],
  )
}

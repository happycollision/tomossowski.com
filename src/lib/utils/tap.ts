export function tap<T>(x: T, fn: (x: T) => any): T {
  fn(x)
  return x
}

export function tapLog<T>(x: T) {
  return tap(x, console.log)
}

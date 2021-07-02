import { wrappingModulo, wrappingSlice } from "./array"

describe("wrappingSlice", () => {
  test("zero index, with a large enough array", () => {
    const arr = [1, 2, 3, 4, 5]
    expect(wrappingSlice(arr, 0, 3)).toEqual([1, 2, 3])
  })

  test("zero index, with too small array", () => {
    const arr = [1, 2]
    expect(wrappingSlice(arr, 0, 3)).toEqual([1, 2, 1])
  })

  test("positive index, no wrap", () => {
    const arr = [1, 2, 3, 4, 5]
    expect(wrappingSlice(arr, 1, 3)).toEqual([2, 3, 4])
  })

  test("positive index, wrapping", () => {
    const arr = [1, 2, 3, 4, 5]
    expect(wrappingSlice(arr, 3, 3)).toEqual([4, 5, 1])
  })

  test("positive index, wrapping twice", () => {
    const arr = [1, 2, 3, 4, 5]
    expect(wrappingSlice(arr, 3, 8)).toEqual([4, 5, 1, 2, 3, 4, 5, 1])
  })

  test("negative index, staying negative", () => {
    const arr = [1, 2, 3, 4, 5]
    expect(wrappingSlice(arr, -3, 3)).toEqual([3, 4, 5])
  })

  test("negative index, becoming positive", () => {
    const arr = [1, 2, 3, 4, 5]
    expect(wrappingSlice(arr, -2, 3)).toEqual([4, 5, 1])
  })

  test("double negative index, staying double negative", () => {
    const arr = [1, 2, 3, 4, 5]
    expect(wrappingSlice(arr, -8, 3)).toEqual([3, 4, 5])
  })

  test("double negative index, becoming single negative", () => {
    const arr = [1, 2, 3, 4, 5]
    expect(wrappingSlice(arr, -7, 3)).toEqual([4, 5, 1])
  })
})

describe("wrappingModulo", () => {
  test("negative", () => {
    expect(wrappingModulo(-1, 3)).toBe(2)
    expect(wrappingModulo(-2, 3)).toBe(1)
    expect(wrappingModulo(-3, 3)).toBe(0)

    expect(wrappingModulo(-4, 3)).toBe(2)
    expect(wrappingModulo(-5, 3)).toBe(1)
    expect(wrappingModulo(-6, 3)).toBe(0)
  })
  test("positive", () => {
    expect(wrappingModulo(1, 3)).toBe(1)
    expect(wrappingModulo(2, 3)).toBe(2)
    expect(wrappingModulo(3, 3)).toBe(0)

    expect(wrappingModulo(4, 3)).toBe(1)
    expect(wrappingModulo(5, 3)).toBe(2)
    expect(wrappingModulo(6, 3)).toBe(0)
  })

  test("err", () => {
    expect(() => wrappingModulo(0, 0)).toThrowError("0")
  })
})

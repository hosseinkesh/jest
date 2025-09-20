import * as add from "../src/math/add";
import { sumArray } from "../src/math/sumArray";

describe("sumArray", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should mock add func and always return 42", () => {
    const addSpy = jest
      .spyOn(add, "add")
      .mockImplementation((a: number, b: number) => 42);
    const result = sumArray([1, 2, 3]);
    expect(addSpy).toHaveBeenCalledTimes(3);
    expect(result).toBe(42);
    expect(addSpy.mock.calls).toEqual([
      [0, 1],
      [42, 2],
      [42, 3],
    ]);
  });
});

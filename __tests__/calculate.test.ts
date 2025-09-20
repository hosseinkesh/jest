import { calculate } from "../src/math/calculate";
import * as add from "../src/math/add";

describe("calculate", () => {
  it("should return 100, no matter what are the inputs", () => {
    const addSpy = jest
      .spyOn(add, "add")
      .mockImplementation((a: number, b: number) => 100);
    const result = calculate(1, 2);
    expect(addSpy).toHaveBeenCalledTimes(1);
    expect(result).toBe(200);
    addSpy.mockRestore();
  });
});

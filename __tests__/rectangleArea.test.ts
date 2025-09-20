import { rectangleArea } from "../src/math/area";
import * as multiply from "../src/math/multiply";

describe("rectangleArea", () => {
  it("it should call multiply and always return 999", () => {
    const multiplySpy = jest
      .spyOn(multiply, "multiply")
      .mockImplementation((a: number, b: number) => 999);

    const result = rectangleArea(5, 10);
    expect(result).toBe(999);
    expect(multiplySpy).toHaveBeenCalledTimes(1);
    expect(multiplySpy).toHaveBeenCalledWith(5, 10);
    multiplySpy.mockRestore();
  });
});

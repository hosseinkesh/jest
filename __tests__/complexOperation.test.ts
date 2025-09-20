import { complexOperation } from "../src/math/complexOperation";

jest.mock("../src/math/mathUtils", () => {
  return {
    ...jest.requireActual("../src/math/mathUtils"),
    add: jest.fn(() => 100),
  };
});

import * as mathUtill from "../src/math/mathUtils";

describe("partial test complexOperation", () => {
  const result = complexOperation(2, 3);

  it("should check if add is mocked", () => {
    expect(mathUtill.add).toHaveBeenCalledWith(2, 3);
    expect(result).toBe(106);
    // I can't have any expectations from the rest of the module
    // since I'm partially testing complexOperation
    // and I haven't mocked the rest of the module
    // This assertion will fail:
    // expect(multiplySpy).toHaveBeenCalledWith(2, 3);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

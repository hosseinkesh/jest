// logger.test.ts
import * as logger from "../src/logger";

describe("warn", () => {
  it("should call log with WARN prefix", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    logger.warn("Something went wrong");
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith("WARN: Something went wrong");
    logSpy.mockRestore();
  });
});


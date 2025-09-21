import { App } from "../src/app";
import { Logger } from "../src/logger";

describe("Logger class", () => {
  let errorSpy: jest.SpyInstance;
  let logSpy: jest.SpyInstance;

  beforeEach(() => {
    logSpy = jest.spyOn(Logger.prototype, "log");
    errorSpy = jest
      .spyOn(Logger.prototype, "error")
      .mockImplementation(() => "mock error");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should log and then return mock error on fail", () => {
    const app = new App();
    const result = app.run("fail");
    expect(result).toBe("mock error");
    expect(logSpy).toHaveBeenCalledWith("Running fail");
    expect(errorSpy).toHaveBeenCalledWith("Task failed!");
  });

  it("should log and return success on ok", () => {
    const app = new App();
    const result = app.run("ok");

    expect(result).toBe("Task success!");
    expect(logSpy).toHaveBeenCalledWith("Running ok");
    expect(errorSpy).not.toHaveBeenCalled();
  });
});

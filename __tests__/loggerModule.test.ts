
jest.mock("../src/logger.ts", () => ({
  log: jest.fn(),
  warn: jest.fn(),
}));

import * as logger from "../src/logger";

describe("warn", () => {
  it("should do the samething but this time, we mock the whole module", () => {
    (logger.warn as jest.Mock).mockImplementation((msg: string) => {
      logger.log(`WARN: ${msg}`);
    });
    logger.warn("full disk");
    expect(logger.log).toHaveBeenCalledTimes(1);
    expect(logger.log).toHaveBeenCalledWith("WARN: full disk");
  });
});

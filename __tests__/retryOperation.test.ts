// __tests__/retryOperation.test.ts
import { retryOperation } from "../src/utils/retryOperation";

describe("retryOperation", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("succeeds on first attempt", async () => {
    const mockOp = jest.fn().mockResolvedValue("success");
    const result = await retryOperation(mockOp, 2, 0);
    expect(result).toBe("success");
    expect(mockOp).toHaveBeenCalledTimes(1);
  });

  it("fails first then succeeds", async () => {
    const mockOp = jest
      .fn()
      .mockRejectedValueOnce(new Error("fail"))
      .mockResolvedValueOnce("success");

    const result = await retryOperation(mockOp, 2, 0);
    expect(result).toBe("success");
    expect(mockOp).toHaveBeenCalledTimes(2);
  });

  it("fails after all retries", async () => {
    const mockOp = jest.fn().mockRejectedValue(new Error("fail"));

    await expect(retryOperation(mockOp, 2, 0)).rejects.toThrow("fail");
    expect(mockOp).toHaveBeenCalledTimes(2);
  });

  it("does not retry when retries is 1", async () => {
    const mockOp = jest.fn().mockRejectedValue(new Error("no-retry"));

    await expect(retryOperation(mockOp, 1, 0)).rejects.toThrow("no-retry");
    expect(mockOp).toHaveBeenCalledTimes(1);
  });

  it("succeeds on the third attempt when retries is 3", async () => {
    const mockOp = jest
      .fn()
      .mockRejectedValueOnce(new Error("fail1"))
      .mockRejectedValueOnce(new Error("fail2"))
      .mockResolvedValueOnce("finally");

    const result = await retryOperation(mockOp, 3, 0);
    expect(result).toBe("finally");
    expect(mockOp).toHaveBeenCalledTimes(3);
  });
});

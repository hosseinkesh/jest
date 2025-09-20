// __tests__/retryOperation.test.ts
import { retryOperation } from "../src/utils/retryOperation";

jest.useFakeTimers();

describe("retryOperation", () => {
  afterEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  it("succeeds on first attempt", async () => {
    const mockOp = jest.fn().mockResolvedValue("success");
    const promise = retryOperation(mockOp, 2, 1000);

    expect(mockOp).toHaveBeenCalledTimes(1);

    await jest.advanceTimersByTimeAsync(1000); // flush timers
    await Promise.resolve(); // flush microtasks

    await expect(promise).resolves.toBe("success");
    expect(mockOp).toHaveBeenCalledTimes(1);
  });

  it("fails first then succeeds", async () => {
    const mockOp = jest
      .fn()
      .mockRejectedValueOnce(new Error("fail"))
      .mockResolvedValueOnce("success");

    const promise = retryOperation(mockOp, 2, 1000);

    expect(mockOp).toHaveBeenCalledTimes(1);

    await jest.advanceTimersByTimeAsync(1000);

    await expect(promise).resolves.toBe("success");
    expect(mockOp).toHaveBeenCalledTimes(2);
  });

  //   it("fails after all retries", async () => {
  //     const mockOp = jest.fn().mockRejectedValue(new Error("fail"));

  //     const promise = retryOperation(mockOp, 2, 1000);

  //     expect(mockOp).toHaveBeenCalledTimes(1);

  //     await jest.advanceTimersByTimeAsync(1000);

  //     await expect(promise).rejects.toThrow("fail");
  //     expect(mockOp).toHaveBeenCalledTimes(2);
  //   });
});

// __tests__/debounce.test.ts
import { debounce } from "../src/utils/debounce";

jest.useFakeTimers();

describe("debounce", () => {
  it("should only call the function once after the delay", () => {
    const fn = jest.fn();
    const debouncedFn = debounce(fn, 1000);

    // Call multiple times quickly
    debouncedFn("first");
    debouncedFn("second");
    debouncedFn("third");

    // Immediately: nothing should have been called
    expect(fn).not.toHaveBeenCalled();

    // Fast-forward time by 1000ms
    jest.advanceTimersByTime(1000);

    // Only the last call should happen
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith("third");
  });
});

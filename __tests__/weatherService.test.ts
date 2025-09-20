jest.mock("axios", () => {
  return {
    ...jest.requireActual("axios"),
    get: jest.fn(),
  };
});

import axios from "axios";
import { fetchWeatherWithRetry } from "../src/weatherService";

describe("weatherService", () => {
  const mockAxiosGet = axios.get as jest.Mock;

  afterEach(() => {
    mockAxiosGet.mockReset();
  });

  it("should get the data in the first try", async () => {
    mockAxiosGet.mockResolvedValue({
      data: { weather: "cloudy", city: "Tehran" },
    });
    const result = await fetchWeatherWithRetry("Tehran");
    expect(mockAxiosGet).toHaveBeenCalledWith("/weather/Tehran");
    expect(mockAxiosGet).toHaveBeenCalledTimes(1);
    expect(result).toEqual({ weather: "cloudy", city: "Tehran" });
  });

  it("should get the data in the second try", async () => {
    mockAxiosGet
      .mockRejectedValueOnce(new Error("Network issue"))
      .mockResolvedValueOnce({
        data: { weather: "cloudy", city: "Tehran" },
      });
    const result = await fetchWeatherWithRetry("Tehran");
    expect(mockAxiosGet).toHaveBeenCalledWith("/weather/Tehran");
    expect(mockAxiosGet).toHaveBeenCalledTimes(2);
    expect(result).toEqual({ weather: "cloudy", city: "Tehran" });
  });

  it("should throw after the second unsuccessful try", async () => {
    mockAxiosGet
      .mockRejectedValueOnce(new Error("Network issue"))
      .mockRejectedValueOnce(new Error("Network issue"));
    await expect(fetchWeatherWithRetry("Tehran")).rejects.toThrow(
      "Weather fetch failed after retry"
    );
    expect(mockAxiosGet).toHaveBeenCalledWith("/weather/Tehran");
    expect(mockAxiosGet).toHaveBeenCalledTimes(2);
  });
});

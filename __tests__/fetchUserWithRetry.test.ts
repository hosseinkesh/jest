jest.mock("axios");

import axios from "axios";

import { fetchUserWithRetry } from "../src/userService";

describe("fetchUserWithRetry", () => {
  const axiosMockGet = axios.get as jest.Mock;
  const userData = {
    data: { id: "100", username: "Jimbo" },
  };

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return user info in the first successful try", async () => {
    const userId = 100;
    axiosMockGet.mockResolvedValueOnce(userData);

    const result = await fetchUserWithRetry(`${userId}`);
    expect(axiosMockGet).toHaveBeenCalledWith(`/users/${userId}`);
    expect(axiosMockGet).toHaveBeenCalledTimes(1);
    expect(result).toEqual(userData);
  });

  it("should return user info in the second successful try", async () => {
    const userId = 100;
    axiosMockGet
      .mockRejectedValueOnce(new Error("Network issue"))
      .mockResolvedValueOnce(userData);

    const result = await fetchUserWithRetry(`${userId}`);
    expect(axiosMockGet).toHaveBeenCalledWith(`/users/${userId}`);
    expect(axiosMockGet).toHaveBeenCalledTimes(2);
    expect(result).toEqual(userData);
  });

  it("should throw after the second unsuccessful try", async () => {
    const userId = 101;
    axiosMockGet
      .mockRejectedValueOnce(new Error("Unauthorized"))
      .mockRejectedValueOnce(new Error("Unauthorized"));

    await expect(fetchUserWithRetry(`${userId}`)).rejects.toThrow(
      "User fetch failed after retry"
    );
    expect(axiosMockGet).toHaveBeenCalledWith(`/users/${userId}`);
    expect(axiosMockGet).toHaveBeenCalledTimes(2);
  });
});

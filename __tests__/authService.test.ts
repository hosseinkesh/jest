import axios from "axios";

import { login } from "../src/authService";

jest.mock("axios");

describe("login", () => {
  const mockedAxiosPost = axios.post as jest.Mock;

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return a token if status is 200", async () => {
    mockedAxiosPost.mockResolvedValue({
      status: 200,
      data: { token: "abc123" },
    });
    const result = await login("user", "pass");
    expect(result).toBe("abc123");
    expect(mockedAxiosPost).toHaveBeenCalledWith("/login", {
      password: "pass",
      username: "user",
    });
  });

  it("should throw if status is not 200", async () => {
    mockedAxiosPost.mockResolvedValue({
      status: 401,
    });
    await expect(login("user", "wrong")).rejects.toThrow("Login failed");
  });
});

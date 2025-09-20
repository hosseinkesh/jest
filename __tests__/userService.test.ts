// __tests__/userService.test.ts
import axios from "axios";
import { getUser } from "../src/userService";

jest.mock("axios");
jest.mock("../src/database");

describe("getUser", () => {
  const mockedAxiosGet = axios.get as jest.Mock;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("it should get user by ID", async () => {
    mockedAxiosGet.mockResolvedValue({ data: { id: 1, name: "Alice" } });
    const result = await getUser(1);
    expect(result).toEqual({ id: 1, name: "Alice" });
    expect(mockedAxiosGet).toHaveBeenCalledWith("/users/1");
  });
});

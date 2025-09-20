import axios from "axios";
import { getUser } from "../src/userService";

jest.mock("axios");

describe("getUser", () => {
  const mockedAxiosGet = axios.get as jest.Mock;

  it("it should get user by ID", async () => {
    mockedAxiosGet.mockResolvedValue({ data: { id: 1, name: "Alice" } });
    const result = await getUser(1);
    expect(result).toEqual({ id: 1, name: "Alice" });
    expect(mockedAxiosGet).toHaveBeenCalledWith("/users/1");
  });
});

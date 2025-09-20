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

// __tests__/UserService.test.ts
import { UserService } from "../src/userService";
import { Database } from "../src/database";

// 1. Mock the whole Database class
jest.mock("../src/database");

describe("UserService", () => {
  let mockConnect: jest.Mock;
  let mockQuery: jest.Mock;

  beforeEach(() => {
    // 2. Reset all mocks before each test
    jest.clearAllMocks();

    // 3. Replace Database methods with jest.fn()
    mockConnect = jest.fn();
    mockQuery = jest.fn();

    // 4. Make the mocked Database constructor return an object
    (Database as jest.Mock).mockImplementation(() => {
      return {
        connect: mockConnect,
        query: mockQuery,
      };
    });
  });

  it("should connect and query the database", () => {
    mockQuery.mockReturnValue("fake-user");

    const service = new UserService();
    const result = service.getUser(1);

    expect(mockConnect).toHaveBeenCalledTimes(1);
    expect(mockQuery).toHaveBeenCalledWith("SELECT * FROM users WHERE id=1");
    expect(result).toBe("fake-user");
  });
});

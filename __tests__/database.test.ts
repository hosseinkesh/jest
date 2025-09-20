jest.mock("../src/database");

import { Database } from "../src/database";
import { UserService } from "../src/userService";

describe("UserService", () => {
  let mockConnect: jest.Mock;
  let mockQuery: jest.Mock;

  beforeEach(() => {
    // reset mock state/implementations between tests
    jest.resetAllMocks();

    mockConnect = jest.fn();
    mockQuery = jest.fn();

    // Ensure the mocked Database constructor returns an object with these methods
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

describe("UserService (auto mock)", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should use mocked Database prototype methods", () => {
    const mockedDatabase = Database as jest.MockedClass<typeof Database>;

    // Ensure prototype methods exist and are jest.fn before setting implementations
    if (!mockedDatabase.prototype.connect) {
      mockedDatabase.prototype.connect = jest.fn();
    }
    if (!mockedDatabase.prototype.query) {
      mockedDatabase.prototype.query = jest.fn();
    }

    mockedDatabase.prototype.connect.mockImplementation(() => "mock connected");
    mockedDatabase.prototype.query.mockImplementation(() => "mock result");

    const service = new UserService();
    const result = service.getUser(42);

    expect(mockedDatabase.prototype.connect).toHaveBeenCalled();
    expect(mockedDatabase.prototype.query).toHaveBeenCalledWith(
      "SELECT * FROM users WHERE id=42"
    );
    expect(result).toBe("mock result");
  });
});

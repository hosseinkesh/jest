import axios from "axios";

import { createPost } from "../src/postService";

jest.mock("axios");

describe("createPost", () => {
  const mockedAxiosPost = axios.post as jest.Mock;
  it("should create a new post when calling the correct url", async () => {
    mockedAxiosPost.mockResolvedValue({
      data: { id: 99, title: "Hello World" },
    });
    const result = await createPost("Hello World");
    expect(result).toEqual({ id: 99, title: "Hello World" });
    expect(mockedAxiosPost).toHaveBeenCalledWith("/posts", {
      title: "Hello World",
    });
  });
});

import axios from "axios";
import { getUserProfile } from "../src/profileService";

jest.mock("axios");

describe("getUserProfile", () => {
  const mockedAxiosGet = axios.get as jest.Mock;

  it("should fetch user and posts for a given userId", async () => {
    const userId = 1;
    const userExpectedRes = { data: "user data" };
    const userExpectedPosts = { data: "user posts" };
    mockedAxiosGet
      .mockResolvedValueOnce(userExpectedRes)
      .mockResolvedValueOnce(userExpectedPosts);

    /*
     if these get uncomment, they will consume the mocked results
     so by the time it gets to getUserProfile, 
     there will be no remaining mocked results.
     therefore, we will get undefined as a "result"
    */
    // const userRes = await axios.get(`/users/${userId}`); //
    // const postsRes = await axios.get(`/users/${userId}/posts`);
    // expect(userRes).toEqual(userExpectedRes);
    // expect(postsRes).toEqual(userExpectedPosts);

    const result = await getUserProfile(userId);
    expect(result).toEqual({
      user: "user data",
      posts: "user posts",
    });
    expect(mockedAxiosGet).toHaveBeenCalledWith(`/users/${userId}`);
    expect(mockedAxiosGet).toHaveBeenCalledWith(`/users/${userId}/posts`);
  });
});

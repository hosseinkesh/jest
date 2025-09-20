// profileService.ts
import axios from "axios";

export async function getUserProfile(userId: number) {
  const userRes = await axios.get(`/users/${userId}`);
  const postsRes = await axios.get(`/users/${userId}/posts`);

  return {
    user: userRes.data,
    posts: postsRes.data,
  };
}

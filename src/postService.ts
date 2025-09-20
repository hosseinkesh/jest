// postService.ts
import axios from "axios";

export async function createPost(title: string) {
  const res = await axios.post("/posts", { title });
  return res.data;
}

// userService.ts
import axios from "axios";

export async function getUser(id: number) {
  const res = await axios.get(`/users/${id}`);

  return res.data;
}

export async function fetchUserWithRetry(id: string) {
  try {
    return await axios.get(`/users/${id}`);
  } catch {
    try {
      return await axios.get(`/users/${id}`);
    } catch {
      throw new Error("User fetch failed after retry");
    }
  }
}


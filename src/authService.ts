// authService.ts
import axios from "axios";

export async function login(username: string, password: string) {
  const res = await axios.post("/login", { username, password });

  if (res.status !== 200) {
    throw new Error("Login failed");
  }

  return res.data.token;
}

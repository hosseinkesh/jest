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

// src/UserService.ts
import { Database } from "./database";

export class UserService {
  private db: Database;

  constructor() {
    this.db = new Database();
  }

  getUser(id: number) {
    this.db.connect();
    return this.db.query(`SELECT * FROM users WHERE id=${id}`);
  }
}

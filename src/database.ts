// src/Database.ts
export class Database {
  connect() {
    return "connected";
  }

  query(sql: string) {
    return `result for ${sql}`;
  }
}

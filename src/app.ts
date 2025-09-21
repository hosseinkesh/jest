// src/app.ts
import { Logger } from "./logger";

export class App {
  private logger: Logger;

  constructor() {
    this.logger = new Logger();
  }

  run(task: string) {
    this.logger.log(`Running ${task}`);
    if (task === "fail") {
      return this.logger.error("Task failed!");
    }
    return "Task success!";
  }
}

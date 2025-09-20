jest.mock("fs", () => {
  const actualFs = jest.requireActual("fs");
  return {
    ...actualFs,
    readFileSync: jest.fn(() => "hello world"),
    writeFileSync: jest.fn(),
  };
});

import * as fs from "fs";
import { processFile } from "../src/fileProcessor";

describe("fileProcessor", () => {
  it("should process file", () => {
    const result = processFile("input/path", "output/path");

    expect(fs.readFileSync).toHaveBeenCalledWith("input/path", "utf-8");
    expect(fs.writeFileSync).toHaveBeenCalledWith("output/path", "HELLO WORLD");
    expect(result).toBe("HELLO WORLD");
  });
});

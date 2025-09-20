// fileProcessor.ts
import { readFileSync, writeFileSync } from "fs";

export function processFile(inputPath: string, outputPath: string) {
  const content = readFileSync(inputPath, "utf-8");
  const upper = content.toUpperCase();
  writeFileSync(outputPath, upper);
  return upper;
}

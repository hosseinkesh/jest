import { add } from "./add";

export function sumArray(numbers: number[]) {
  return numbers.reduce((acc, n) => add(acc, n), 0);
}

import { add, multiply } from "./mathUtils";

export function complexOperation(a: number, b: number) {
  const sum = add(a, b);
  const product = multiply(a, b);
  return sum + product;
}

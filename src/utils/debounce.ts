// src/utils/debounce.ts
export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
) {
  let timer: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

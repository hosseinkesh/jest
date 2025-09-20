export async function retryOperation<T>(
  fn: () => Promise<T>,
  retries: number,
  delay: number
): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    if (retries <= 1) throw err;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        retryOperation(fn, retries - 1, delay)
          .then(resolve)
          .catch(reject);
      }, delay);
    });
  }
}

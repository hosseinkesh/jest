export async function retryOperation<T>(
  operation: () => Promise<T>,
  retries: number,
  delayMs: number
): Promise<T> {
  let attempts = 0;

  return new Promise<T>((resolve, reject) => {
    const tryOnce = () => {
      attempts += 1;
      Promise.resolve()
        .then(() => operation())
        .then(resolve)
        .catch((err) => {
          if (attempts >= retries) {
            reject(err);
          } else {
            setTimeout(tryOnce, delayMs);
          }
        });
    };

    tryOnce();
  });
}

// logger.ts
export function log(message: string) {
  console.log(message);
}

export function warn(message: string) {
  log(`WARN: ${message}`);
}

export async function waitForCondition(condition: () => Promise<boolean>, timeoutMs: number): Promise<void> {
  const startTime = Date.now();
  while (Date.now() - startTime < timeoutMs) {
    if (await condition()) {
      return;
    }
    await wait(timeoutMs / 10);
  }
  throw new Error('Timeout exceeded while waiting for condition to be met.');
}

export function wait(timeInMs: number): Promise<void> {
  return new Promise((resolve) => setTimeout(() => resolve(), timeInMs));
}

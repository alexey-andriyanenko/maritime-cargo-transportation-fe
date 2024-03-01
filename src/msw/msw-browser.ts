import { setupWorker } from "msw/browser";
import { createHandlers } from "./msw-handlers";

export const checkForBrowserMocking = async () => {
  if (!ENABLE_MOCK) return;

  const worker = setupWorker(...createHandlers());
  return await worker.start();
};

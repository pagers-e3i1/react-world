import { isServer } from "../../constants/env";

const initMockApi = async () => {
  if (isServer) {
    const { server } = await import("../../mocks/workers/server");
    server.listen();
  } else {
    const { browser } = await import("../../mocks/workers/browser");
    browser.start();
  }
};

export { initMockApi };

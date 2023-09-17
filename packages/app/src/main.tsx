import { swrOptions } from "apis/config/swr/options.ts";
import { Provider } from "jotai";
import { initMockApi } from "mocks/workers";
import React from "react";
import ReactDOM from "react-dom/client";
import { SWRConfig } from "swr";

import App from "./App.tsx";
import { isDevEnv } from "./constants/env";

async function workerPrepare() {
  if (isDevEnv) await initMockApi();
  return;
}

function reactDOMrenderWithWorker(dom: JSX.Element) {
  workerPrepare().then(() => {
    ReactDOM.createRoot(document.getElementById("root")!).render(dom);
  });
}

reactDOMrenderWithWorker(
  <React.StrictMode>
    <Provider>
      <SWRConfig value={swrOptions}>
        <App />
      </SWRConfig>
    </Provider>
  </React.StrictMode>,
);

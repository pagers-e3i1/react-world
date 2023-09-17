import { initMockApi } from "mocks/workers";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import { isDevEnv } from "./constants/env";

async function workerPrepare() {
  if (isDevEnv) await initMockApi();
  return;
}

function renderWithWorker(dom: JSX.Element) {
  workerPrepare().then(() => {
    ReactDOM.createRoot(document.getElementById("root")!).render(dom);
  });
}

renderWithWorker(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

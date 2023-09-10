import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

//TODO : build설정 수정 필요
export default defineConfig({
  base: "./",
  plugins: [react(), tsconfigPaths(), vanillaExtractPlugin()],
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "main",
      formats: ["es", "cjs"],
      fileName: "index",
    },
  },
  ß,
});

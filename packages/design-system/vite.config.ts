import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

//TODO : build설정 수정 필요
export default defineConfig({
  base: "./",
  plugins: [react(), tsconfigPaths(), vanillaExtractPlugin(), dts()],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es", "cjs"],
      fileName: "index",
    },
    rollupOptions: {
      output: {
        intro: 'import "./style.css"',
      },
    },
  },
});

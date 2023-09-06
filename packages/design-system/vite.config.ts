import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

//TODO : build설정 수정 필요
export default defineConfig({
  base: "./",
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "main",
      formats: ["es", "cjs"],
      fileName: "index",
    },
  },
});

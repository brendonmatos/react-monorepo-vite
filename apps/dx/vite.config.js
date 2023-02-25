/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import AutoImport from "unplugin-auto-import/vite";
import Inspect from "vite-plugin-inspect";
import { optimizeImports } from "unplugin-rewrite-imports";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src",
  plugins: [
    optimizeImports.vite({
      optimize: [
        {
          moduleName: "utils",
          imports: [
            {
              exportedAs: "getBrazil",
              importedAs: "getBrazil",
              rewrite: "utils/brazil",
            },
          ],
        },
      ],
    }),
    react(),
    Inspect(),

    AutoImport({
      imports: [
        "react",
        {
          react: [
            ["default", "React"],
            ["Suspense", "Suspense"],
          ],
        },
        "react-router-dom",
        {
          "@testing-library/react": [
            "render",
            "screen",
            "waitFor",
            "renderHook",
            "act",
          ],
        },
      ],
      dts: true,
      include: [/\.jsx?$/, /\.tsx?$/],
    }),
  ],
  test: {
    globals: true,
    environment: "happy-dom",
    dir: "../",
  },
  build: {
    minify: false,
  },
});

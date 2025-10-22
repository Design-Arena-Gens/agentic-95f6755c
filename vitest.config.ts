import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const rootDir = dirname(fileURLToPath(new URL(".", import.meta.url)));

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(rootDir, "./")
    }
  },
  test: {
    environment: "node",
    globals: true,
    include: ["tests/**/*.test.ts"],
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["data/**/*.ts"]
    }
  }
});

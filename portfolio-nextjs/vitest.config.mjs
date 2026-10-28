import { defineConfig } from "vitest/config";
import { transform } from "esbuild";

export default defineConfig({
  plugins: [
    {
      name: "transform-jsx-in-js",
      enforce: "pre",
      async transform(code, id) {
        if (
          /[/\\](app|components)[/\\].*\.js$/.test(id) &&
          !id.includes("node_modules")
        ) {
          return await transform(code, {
            loader: "jsx",
            jsx: "automatic",
            sourcefile: id,
          });
        }
      },
    },
  ],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.js"],
    include: ["**/*.test.{js,jsx}"],
  },
});

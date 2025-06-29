import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      js,
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      "prettier/prettier": "warn",
    },
  },
]);

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,


  {
    rules: {
      // Spacing & Whitespace
      "no-trailing-spaces": "error",
      "indent": ["error", 2],
      "no-multi-spaces": "error",
      "space-infix-ops": "error",
      "eol-last": ["error", "always"],

      // Best Practices (Optional but recommended)
      // "no-unused-vars": "warn",
      "prefer-const": "error",
    }
  },

  // Override default ignores
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
  ]),
]);

export default eslintConfig;

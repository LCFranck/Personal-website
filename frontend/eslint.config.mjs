import nextVitals from "eslint-config-next/core-web-vitals";

export default [
  ...nextVitals,
   {
    ignores: ["eslint.config.mjs"],
  },
  {
    rules: {
      "no-trailing-spaces": "error",
      "indent": ["error", 2],
      "no-multi-spaces": "error",
      "space-infix-ops": "error",
      "eol-last": ["error", "always"],
      "prefer-const": "error",
    },
  },
];

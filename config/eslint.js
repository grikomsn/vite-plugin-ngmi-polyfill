// @ts-check

const fs = require("fs");
const path = require("path");

// eslint-disable-next-line no-nested-ternary
const tsConfig = fs.existsSync("tsconfig.json")
  ? path.resolve("tsconfig.json")
  : fs.existsSync("types/tsconfig.json")
  ? path.resolve("types/tsconfig.json")
  : undefined;

/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  extends: [
    require.resolve("@vercel/style-guide/eslint/browser"),
    require.resolve("@vercel/style-guide/eslint/node"),
  ],
  overrides: [
    {
      files: ["**/*.d.ts", "**/*.ts", "**/*.tsx"],
      extends: [require.resolve("@vercel/style-guide/eslint/typescript")],
      parserOptions: {
        project: tsConfig,
      },
    },
    {
      files: ["tsup.config.{js,ts}"],
      rules: {
        "import/no-default-export": ["off"],
      },
    },
  ],
};

module.exports = eslintConfig;

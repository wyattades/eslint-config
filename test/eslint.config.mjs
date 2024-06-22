import baseConfig from "@wyattades/eslint-config";
import importOrderConfig from "@wyattades/eslint-config/import-order";

/** @type {import('eslint').ESLint.ConfigData[]} */
export default [
  ...baseConfig,
  ...importOrderConfig,
  {
    rules: {
      "no-console": "off",
    },
    languageOptions: {
      parserOptions: {
        project: ["tsconfig.json", "with-nested/tsconfig.json"],
      },
    },
  },
  {
    // TODO: there may be a better way to still enable this rule in nested packages...
    files: ["with-nested/**/*"],
    rules: {
      "import/no-extraneous-dependencies": "off",
    },
  },
];

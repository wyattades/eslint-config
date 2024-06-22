import path from "node:path";
import { fileURLToPath } from "node:url";
import globals from "globals";
import { fixupConfigRules } from "@eslint/compat";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tsParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-type-checked",
      "plugin:@typescript-eslint/stylistic-type-checked",
      "plugin:jest/recommended",
      "plugin:jest-formatting/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:import/recommended",
      "plugin:jsx-a11y/recommended",
      "airbnb",
      "airbnb-typescript",
      "prettier",
      "plugin:prettier/recommended",
    ),
  ),
  {
    files: ["**/*.{ts,js,tsx,jsx,mjs,cjs}"],

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },

      parser: tsParser,

      parserOptions: {
        project: true,
      },
    },

    settings: {
      jest: {
        version: "detect",
      },

      react: {
        version: "detect",
      },

      "import/resolver": {
        typescript: {},
      },
    },

    rules: {
      "prettier/prettier": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-non-null-assertion": "off",

      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "all",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_[^$]",
        },
      ],

      "@typescript-eslint/no-loop-func": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/lines-between-class-members": "off",
      "@typescript-eslint/class-literal-property-style": "off",
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      "@typescript-eslint/consistent-type-imports": "warn",

      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowNumber: true,
          allowBoolean: true,
          allowAny: false,
          allowNullish: false,
        },
      ],

      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: {
            arguments: false,
            attributes: false,
          },
        },
      ],

      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "import/prefer-default-export": "off",
      "import/no-mutable-exports": "warn",
      "import/extensions": "off",
      "import/no-duplicates": "error",
      "import/newline-after-import": "warn",
      "import/order": "off",

      "no-restricted-exports": [
        "error",
        {
          restrictedNamedExports: ["then"],
        },
      ],

      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/function-component-definition": "off",
      "react/jsx-no-useless-fragment": "off",
      "react/jsx-props-no-spreading": "off",
      "react/button-has-type": "warn",
      "react/require-default-props": "off",
      "react/state-in-constructor": "off",
      "react/no-unused-state": "warn",
      "react/no-array-index-key": "off",
      "react/jsx-no-constructed-context-values": "off",

      "react/no-unstable-nested-components": [
        "error",
        {
          allowAsProps: true,
        },
      ],

      "react/destructuring-assignment": "off",
      "react/no-unused-prop-types": "off",
      "react/no-danger": "off",
      "react/sort-comp": "off",

      "react/no-unknown-property": [
        "error",
        {
          ignore: ["jsx"],
        },
      ],

      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          assert: "either",
        },
      ],

      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["Link", "NavLink"],
          specialLink: ["to", "route"],
        },
      ],

      "no-empty": [
        "error",
        {
          allowEmptyCatch: true,
        },
      ],

      "no-underscore-dangle": "off",
      "no-console": "warn",
      "no-void": "off",
      "class-methods-use-this": "off",
      "no-continue": "off",
      "no-plusplus": "off",
      "no-restricted-globals": "off",
      radix: "off",
      "no-with": "off",
      "no-labels": "off",

      "no-restricted-syntax": [
        "error",
        {
          selector: "LabeledStatement",
          message:
            "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        },
        {
          selector: "WithStatement",
          message:
            "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        },
      ],

      "prefer-const": [
        "warn",
        {
          ignoreReadBeforeAssign: true,
        },
      ],

      "max-classes-per-file": "off",
      "no-else-return": "off",
      "consistent-return": "off",
      "prefer-destructuring": "off",
      "no-param-reassign": "off",
      "no-multi-assign": "off",
      "no-cond-assign": "off",
      "no-return-assign": "off",
      "no-nested-ternary": "off",
      "guard-for-in": "off",
      "one-var": "off",
      "no-await-in-loop": "off",
      "no-bitwise": "off",

      "no-unreachable-loop": [
        "error",
        {
          ignore: ["ForInStatement", "ForOfStatement"],
        },
      ],

      "no-promise-executor-return": "off",
      "prefer-template": "off",
      "object-shorthand": "warn",
    },
  },
  {
    files: ["**/*.{ts,tsx}"],

    rules: {
      "no-undef": "off",
    },
  },
];

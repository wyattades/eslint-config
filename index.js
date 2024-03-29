/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  extends: [
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
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
  },
  // assumes isomorphic (client + server) environment
  env: {
    node: true,
    browser: true,
  },
  rules: {
    // prettier:
    "prettier/prettier": "warn",

    // typescript:
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-non-null-assertion": "off",

    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "all", // default is "after-used"
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_[^$]", // still warn about unused `_`, like lodash
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

    // these are a bit higher level of strictness than I like
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-return": "off",

    // eslint-plugin-import:
    "import/prefer-default-export": "off",
    "import/no-mutable-exports": "warn",
    "import/extensions": "off",
    "import/no-duplicates": "error",
    "import/newline-after-import": "warn",
    "import/order": "off", // use prettier-plugin-orgainze-imports instead

    "no-restricted-exports": [
      "error",
      {
        restrictedNamedExports: [
          // "default", allow `export { default } from '...'`
          "then",
        ],
      },
    ],

    // react:
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off", // obsolete b/c of: `@babel/preset-react", { "runtime": "automatic" }`
    "react/function-component-definition": "off", // allow anonymous function components
    "react/jsx-no-useless-fragment": "off",
    "react/jsx-props-no-spreading": "off",
    "react/button-has-type": "warn",
    "react/require-default-props": "off",
    "react/state-in-constructor": "off",
    "react/no-unused-state": "warn",
    "react/no-array-index-key": "off",
    "react/jsx-no-constructed-context-values": "off", // TODO
    "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
    "react/destructuring-assignment": "off",
    "react/no-unused-prop-types": "off",
    "react/no-danger": "off",
    "react/sort-comp": "off",
    "react/no-unknown-property": ["error", { ignore: ["jsx"] }], // allow `styled-jsx` lib e.g. `<style jsx>...</style>`

    // a11y
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        assert: "either",
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link", "NavLink"], // common component names
        specialLink: ["to", "route"], // common link prop names
      },
    ],

    // eslint:
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
    "no-with": "off", // use 'no-restricted-syntax' instead
    "no-labels": "off", // use 'no-restricted-syntax' instead
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
    "consistent-return": "off", // TODO
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
      { ignore: ["ForInStatement", "ForOfStatement"] }, // allows: `for (const _ in obj) return true;`
    ],
    "no-promise-executor-return": "off",
    "prefer-template": "off",
    "object-shorthand": "warn",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-undef": "off", // handled by typescript
      },
    },
  ],
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
};

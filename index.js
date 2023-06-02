module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
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
    "@typescript-eslint/no-explicit-any": "off", // user's will likely want to override this
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_[^$]",
      },
    ],
    "@typescript-eslint/no-loop-func": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/lines-between-class-members": "off",

    // these are a bit higher level of strictness than I like
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",

    // eslint-plugin-import:
    "import/prefer-default-export": "off",
    "import/no-mutable-exports": "warn",
    "import/extensions": "off",
    "import/no-duplicates": "error",
    "import/newline-after-import": "warn",
    "import/order": [
      "warn",
      {
        groups: [["builtin", "external"], "internal"],
        "newlines-between": "always-and-inside-groups",
      },
    ],
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
    "react/prop-types": "off", // this is debatable, but I just don't like the `prop-types` library
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

module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:jest-formatting/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",

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

    // react:
    "react/prop-types": "off", // this is debatable, but I just don't like the `prop-types` library
    "react/react-in-jsx-scope": "off", // obsolete b/c of: `@babel/preset-react", { "runtime": "automatic" }`

    // eslint:
    "no-undef": "error",
    "class-methods-use-this": "off",
    "no-continue": "off",
    "no-plusplus": "off",
    "no-restricted-globals": "off",
    radix: "off",
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

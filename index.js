module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript",
    "plugin:jest/recommended",
    "plugin:jest-formatting/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
  },
  plugins: ["eslint-plugin-import"],
  rules: {
    "prettier/prettier": "warn",

    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-loop-func": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/lines-between-class-members": "off",

    "class-methods-use-this": "off",
    "no-continue": "off",
    "no-plusplus": "off",
    "no-restricted-globals": "off",
    radix: "off",
    "no-restricted-syntax": [
      "error",
      // {
      //   selector: "ForInStatement",
      //   message:
      //     "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      // },
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
      "error",
      {
        ignoreReadBeforeAssign: true,
      },
    ],

    "import/prefer-default-export": 0,
    "import/no-mutable-exports": 1,
    // "import/no-unresolved": [2, { "ignore": ["\\.(png|jpg|svg)\\?(lqip)$"] }],
    "import/extensions": 0,
    "import/no-duplicates": 2,
    "import/newline-after-import": 1,
    "import/order": [
      1,
      {
        groups: [["builtin", "external"], "internal"],
        "newlines-between": "always-and-inside-groups",
      },
    ],

    // unsupported rules:
    "react/jsx-filename-extension": "off",
    // "import/no-extraneous-dependencies": "off",
    // "import/extensions": "off",
    // "import/prefer-default-export": "off",
    "react/forbid-prop-types": "off",
  },
  settings: {
    jest: {
      version: "detect",
    },
    react: {
      version: "detect",
    },
  },
};

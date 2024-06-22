/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    rules: {
      "import/order": [
        "warn",
        {
          groups: [["builtin", "external"], "internal"],
          "newlines-between": "always-and-inside-groups",
        },
      ],
    },
  },
];

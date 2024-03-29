/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  rules: {
    "import/order": [
      "warn",
      {
        groups: [["builtin", "external"], "internal"],
        "newlines-between": "always-and-inside-groups",
      },
    ],
  },
};

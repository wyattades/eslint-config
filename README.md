# @wyattades/eslint-config

> ESLint configuration for TypeScript, Prettier, React, Jest

This the base [ESLint](https://eslint.org) configuration I use in personal projects.

✔ Maximum _reasonable™️_ Typescript strictness

✔ Relying on [Prettier](https://prettier.io) as much as possible

✔ Supports [React](https://reactjs.org)

✔ Strict accessibility requirements via [JSX a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)

✔ Supports [Jest](https://jestjs.io)

✔ Supports nested project directories with global imports

### Usage

1. Install the package and its minimum required peer dependencies:

   ```bash
   pnpm add -D @wyattades/eslint-config eslint prettier
   ```

   Additional packages are _optional_:

   ```bash
   pnpm add react react-dom typescript jest
   ```

2. Extend this package in your [ESLint configuration](https://eslint.org/docs/user-guide/configuring):

   ```json
   {
     "extends": "@wyattades/eslint-config"
   }
   ```

   ⚠️ If you use a TS configuration file other than the default (`tsconfig.json` under the project's root), you need to specify its path:

   ```json
   {
     "parserOptions": {
       "project": "ts/tsconfig.dev.json"
     }
   }
   ```

3. (Optional) Auto-organize imports via [prettier-plugin-organize-imports](https://github.com/simonhaenisch/prettier-plugin-organize-imports)
   ```sh
   pnpm add prettier-plugin-organize-imports
   ```
   .prettierrc
   ```json
   {
     "plugins": ["prettier-plugin-organize-imports"]
   }
   ```

## Disclaimer

This package is intended for my own projects. I tend to update the rules whenever I learn new best practices, so new minor versions may introduce breaking changes.

---

**Author:** Wyatt Ades https://wyattades.com

**Credit:** Based on a [similar package](https://github.com/kael89/eslint-config-kael89-ts) by [Kostas Karvounis](https://github.com/kael89)

**License:** [MIT](./LICENSE)

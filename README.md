# @wyattades/eslint-config

## ESLint configuration for TypeScript, Prettier, React, Jest

This the base [ESLint](https://eslint.org/) configuration I use in personal projects.

✔ Extends the popular [Airbnb Style Guide](https://github.com/airbnb/javascript)

✔ Uses [Prettier](https://prettier.io/) for code formatting

✔ Provides additional linting for [Jest](https://jestjs.io/), [React](https://reactjs.org/)

✔ Supports nested project directories with global imports

### Usage

1. Install the package and its minimum required peer dependencies:

   ```bash
   yarn add -D @wyattades/eslint-config eslint prettier
   ```

   Additional packages are _optional_:

   ```bash
   yarn add react react-dom typescript jest
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

---

**Author:** Wyatt Ades https://wyattades.com

**Credit:** Based on a [similar package](https://github.com/kael89/eslint-config-kael89-ts) by [Kostas Karvounis](https://github.com/kael89)

**License:** [MIT](./LICENSE)

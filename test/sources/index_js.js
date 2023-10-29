import { noop } from "imported/foo";

noop();

const _wow = true;

const foo = 123;

let initializeAfterUse;

const fn = () => {
  return initializeAfterUse;
};

initializeAfterUse = 123;

export { foo, fn };

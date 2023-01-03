import { noop } from "imported/foo";

noop();

const _wow = true;

const foo = 123;

let initializeAfterUse: number;

const fn = () => {
  return initializeAfterUse;
};

initializeAfterUse = 123;

type TestSatisfiesT = { testSatisfies: number };

const bar = { testSatisfies: 42 } satisfies TestSatisfiesT;

export { foo, bar, fn };

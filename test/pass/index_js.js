const _wow = true;

const foo = 123;

let initializeAfterUse: number;

const fn = () => {
  return initializeAfterUse;
};

initializeAfterUse = 123;

export { foo, fn };

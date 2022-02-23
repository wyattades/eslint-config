// eslint-error: @typescript-eslint/no-use-before-define

export const run = () => {
  fn();
};

const fn = () => {};

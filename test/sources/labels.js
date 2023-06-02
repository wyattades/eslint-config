// eslint-error: no-restricted-syntax
// eslint-error: no-restricted-syntax

myLabel: for (const _a in {}) {
  for (const _b in {}) {
    break myLabel;
  }
}

const thing = { x: 0 };
with (thing) {
  // eslint-disable-next-line no-undef, @typescript-eslint/no-unsafe-assignment
  x = 1;
}

export {};

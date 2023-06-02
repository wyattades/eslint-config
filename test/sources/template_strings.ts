// eslint-error: @typescript-eslint/restrict-template-expressions

const isNull = null;

export const t = `some string ${isNull}`;

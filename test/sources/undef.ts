export const fn = () => {
  // no eslint error, but typescript will catch it
  console.log(thisDoesntExist);
};

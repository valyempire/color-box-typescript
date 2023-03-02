/**
 *  Return a random item from a list.
 */
export const choice = (arr: string[]) => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

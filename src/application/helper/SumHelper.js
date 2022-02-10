export const SumValues = (arr) => {
  let precieAll = 0;
  arr.forEach((item) => {
    precieAll += Number(item.price);
  });
  return precieAll;
};

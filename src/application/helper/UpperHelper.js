export const CapitalizeToString = (str) => {
  const text = str.toLowerCase();
  return text.charAt(0).toUpperCase() + text.slice(1);
};

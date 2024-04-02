export const toCamelCase = (str: any) => {
  let camelCaseStr = "";
  let capitalizeNext = true;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === " " || char === "-" || char === "_") {
      capitalizeNext = true;
      camelCaseStr += " ";
    } else {
      camelCaseStr += capitalizeNext ? char.toUpperCase() : char.toLowerCase();
      capitalizeNext = false;
    }
  }
  // Capitalize the first letter
  camelCaseStr = camelCaseStr.trim();
  return camelCaseStr;
};

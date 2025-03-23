export function capitalizeFirstLetter(word: string): string {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function changeDelimiter(string: string) {
  return string.split(" ").join("-");
}

export const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

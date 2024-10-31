// /utils/utils.ts

/**
 * It is a function needed to normalize the last part of the URL to 
 * use that path in order to display or render different colors or 
 * content on a component.
 * 
 * This function will be called often. Each regular expression
 * has a description of what it does.
 * 
 * @param title Last part of the path being navigated to
 * @returns normalized title for URL
 */

export const normalizeTitle = (title: string): string => {
  return title
    .normalize("NFD") // Normalize the string to decompose accented characters
    .replace(/[\u0300-\u036f]/g, "") // Remove the accents
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9 ]/g, "") // Remove any non-alphanumeric characters except spaces
    .replace(/\s+/g, "-"); // Replace spaces with hyphens for URLs
};

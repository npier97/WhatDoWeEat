export const buildIngredientsList = (
  tags: string[],
  inputValue: string
): string[] =>
  [inputValue, ...tags]
    .map((ingredient) => ingredient.trim().toLowerCase())
    .filter((ingredient) => ingredient.length > 0)
    .filter(
      (ingredient, index, ingredients) =>
        ingredients.indexOf(ingredient) === index
    );

export const buildQueryParams = (tags: string[], inputValue: string): string =>
  buildIngredientsList(tags, inputValue).join(',');

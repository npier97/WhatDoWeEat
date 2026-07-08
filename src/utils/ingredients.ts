export const buildIngredientsList = (
  tags: string[],
  ingredients: string[],
  inputValue: string
): string[] => {
  const filteredTags = tags.filter((tag) => !ingredients.includes(tag));
  const typedIngredient =
    inputValue && !ingredients.includes(inputValue) ? inputValue : '';

  return [typedIngredient, ...filteredTags].filter(Boolean);
};

export const buildQueryParams = (
  tags: string[],
  ingredients: string[],
  inputValue: string
): string => buildIngredientsList(tags, ingredients, inputValue).join(',');

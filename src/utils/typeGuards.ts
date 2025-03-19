import { Recipe } from '@/types/RecipeList';
import { RandomRecipeProps } from '@/types/RandomRecipe';

export const isRandomRecipe = (recipe: Recipe): recipe is RandomRecipeProps => {
  return (recipe as RandomRecipeProps).summary !== undefined;
};

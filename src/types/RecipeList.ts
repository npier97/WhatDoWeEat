import { RandomRecipeProps } from './RandomRecipe';
import { RecipeProps } from './Recipe';

export interface RecipeListProps {
  recipes: Recipe[];
}

export type Recipe = RecipeProps | RandomRecipeProps;

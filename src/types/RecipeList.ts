import { RandomRecipeProps } from './RandomRecipe';
import { RecipeProps } from './Recipe';

export interface RecipeListProps {
  recipes: Recipe[];
  loading: boolean;
}

export type Recipe = RecipeProps | RandomRecipeProps;

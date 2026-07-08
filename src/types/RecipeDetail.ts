import { IngredientProps, RecipeProps } from './Recipe';

export interface RandomRecipeResponse {
  recipes: RecipeDetailProps[];
}

export type RecipeDetailProps = RecipeProps & {
  summary: string;
  instructions: string;
  extendedIngredients?: IngredientProps[];
};

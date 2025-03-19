import { IngredientProps, RecipeProps } from './Recipe';

export interface RandomRecipeResponse {
  recipes: RandomRecipeProps[];
}

export type RandomRecipeProps = RecipeProps & {
  summary: string;
  instructions: string;
  extendedIngredients?: IngredientProps[];
};

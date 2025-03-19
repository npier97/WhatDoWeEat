import { IngredientProps } from './Recipe';

export interface RandomRecipeResponse {
  recipes: RandomRecipeProps[];
}

export type RandomRecipeProps = {
  id: number;
  title: string;
  image?: string;
  summary: string;
  instructions: string;
  extendedIngredients?: IngredientProps[];
};

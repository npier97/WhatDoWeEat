import type { Ingredient } from './Ingredient';

export interface Recipe {
  id: number;
  title: string;
  summary: string;
  instructions?: string;
  image?: string;
  likes?: string;
  missedIngredientCount?: number;
  missedIngredients?: Ingredient[];
  usedIngredientCount?: number;
  usedIngredients?: Ingredient[];
}

export interface RecipeDetail extends Recipe {
  instructions: string;
  extendedIngredients?: Ingredient[];
}

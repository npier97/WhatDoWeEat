import { RecipeDetailProps } from './RecipeDetail';
import { RecipeProps } from './Recipe';

export interface RecipeListProps {
  recipes: Recipe[];
}

export type Recipe = RecipeProps | RecipeDetailProps;

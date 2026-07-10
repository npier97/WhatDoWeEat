import { API_KEY } from '@/constants';
import type { Recipe, RecipeDetail } from '@/types/Recipe';
import { fetchData } from '@/utils/fetch';

const RESULTS_LIMIT = 3;

interface RandomRecipeResponse {
  recipes: RecipeDetail[];
}

export const fetchRecipesByIngredients = async (
  queryParams: string
): Promise<RecipeDetail[]> => {
  if (!queryParams) return [];

  const recipes = await fetchData<Recipe[]>(
    `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${
      API_KEY
    }&ingredients=${encodeURIComponent(queryParams)}&number=${RESULTS_LIMIT}`
  );

  if (recipes.length === 0) return [];

  const recipeDetails = await Promise.all(
    recipes.map((recipe) =>
      fetchData<RecipeDetail>(
        `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${API_KEY}`
      )
    )
  );

  return recipes.map((recipe, index) => ({
    ...recipe,
    ...recipeDetails[index]
  }));
};

export const fetchRandomRecipes = async (): Promise<RecipeDetail[]> => {
  const data = await fetchData<RandomRecipeResponse>(
    `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=${RESULTS_LIMIT}`
  );

  return data.recipes;
};

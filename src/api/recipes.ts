import { API_KEY } from '@/constants';
import { RecipeProps } from '@/types/Recipe';
import { RandomRecipeResponse, RecipeDetailProps } from '@/types/RecipeDetail'; // renamed from RandomRecipeProps
import { fetchData } from '@/utils/fetch';

const RESULTS_LIMIT = 3;

export const fetchRecipesByIngredients = async (
  queryParams: string
): Promise<(RecipeProps & RecipeDetailProps)[]> => {
  if (!queryParams) return [];

  const recipes = await fetchData<RecipeProps[]>(
    `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${
      API_KEY
    }&ingredients=${encodeURIComponent(queryParams)}&number=${RESULTS_LIMIT}`
  );

  if (recipes.length === 0) return [];

  const recipeDetails = await Promise.all(
    recipes.map((recipe) =>
      fetchData<RecipeDetailProps>(
        `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${API_KEY}`
      )
    )
  );

  return recipes.map((recipe, index) => ({
    ...recipe,
    ...recipeDetails[index]
  }));
};

export const fetchRandomRecipes = async (): Promise<RecipeDetailProps[]> => {
  const data = await fetchData<RandomRecipeResponse>(
    `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=${RESULTS_LIMIT}`
  );

  return data.recipes;
};

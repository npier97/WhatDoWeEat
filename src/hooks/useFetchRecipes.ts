import { API_KEY } from '@/constants';
import { RecipeProps } from '@/types/Recipe';
import { fetchData } from '@utils/fetch';
import { RandomRecipeProps } from '@/types/RandomRecipe';
import { useDispatch } from 'react-redux';
import {
  setIngredients,
  setQueryParams,
  setRecipes
} from '@/components/state/recipeSlice';

export const useFetchRecipes = () => {
  const dispatch = useDispatch();
  const fetchRecipes = async (queryParams: string): Promise<RecipeProps[]> => {
    const recipes = await fetchData<RecipeProps[]>(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${queryParams}&number=3`
    );

    if (recipes.length === 0) return [];

    const recipesInfoData = await Promise.all(
      recipes.map((recipe) =>
        fetchData<RandomRecipeProps>(
          `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${API_KEY}`
        )
      )
    );

    const recipesWithInfo = recipes.map((recipe, index) => ({
      ...recipe,
      ...recipesInfoData[index]
    }));

    dispatch(setRecipes(recipesWithInfo));
    dispatch(setIngredients([]));
    dispatch(setQueryParams(''));

    return recipesWithInfo;
  };

  return { fetchRecipes };
};

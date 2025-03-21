import {
  setError,
  setLoading,
  setRecipes
} from '@components/state/recipeSlice';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { API_KEY } from '@/constants';
import { RecipeProps } from '@/types/Recipe';
import { fetchData } from '@utils/fetch';
import { RandomRecipeProps } from '@/types/RandomRecipe';

export const useFetchRecipes = () => {
  const dispatch = useDispatch();

  const fetchRecipes = useCallback(
    async (queryParams: string) => {
      dispatch(setLoading(true));
      try {
        const recipes = await fetchData<RecipeProps[]>(
          `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${queryParams}&number=3`
        );

        if (recipes.length === 0) {
          dispatch(setRecipes([]));
          return;
        }

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
      } catch (error) {
        console.error('Error fetching data:', error);
        dispatch(setError('Failed to fetch recipes'));
      } finally {
        setTimeout(() => dispatch(setLoading(false)), 300);
      }
    },
    [dispatch]
  );

  return { fetchRecipes };
};

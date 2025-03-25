import {
  setError,
  setIngredients,
  setLoading,
  setRecipes
} from '@components/state/recipeSlice';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_KEY } from '@/constants';
import { RecipeProps } from '@/types/Recipe';
import { fetchData } from '@utils/fetch';
import { RandomRecipeProps } from '@/types/RandomRecipe';
import { setCachedRecipes } from '@components/state/cacheSlice';
import { RootState } from '@/store';

export const useFetchRecipes = () => {
  const dispatch = useDispatch();
  const cachedRecipes = useSelector(
    (state: RootState) => state.cache.cachedRecipes
  );

  const fetchRecipes = useCallback(
    async (queryParams: string) => {
      const cachedData = cachedRecipes && cachedRecipes[queryParams];

      dispatch(setLoading(true));

      if (cachedData) {
        dispatch(setRecipes(cachedData.recipes));
        dispatch(setLoading(false));
        dispatch(setIngredients([]));
        return;
      }

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
        dispatch(
          setCachedRecipes({ query: queryParams, recipes: recipesWithInfo })
        );
      } catch (error) {
        console.error('Error fetching data:', error);
        dispatch(setError('Failed to fetch recipes'));
      } finally {
        setTimeout(() => dispatch(setLoading(false)), 300);
        dispatch(setIngredients([]));
      }
    },
    [dispatch, cachedRecipes]
  );

  return { fetchRecipes };
};

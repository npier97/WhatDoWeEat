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

export const useFetchRecipes = () => {
  const dispatch = useDispatch();

  const fetchRecipes = useCallback(
    async (queryParams: string) => {
      dispatch(setLoading(true));
      try {
        const data = await fetchData<RecipeProps[]>(
          `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${queryParams}&number=3`
        );
        dispatch(setRecipes(data));
      } catch (error) {
        console.error('Error fetching data:', error);
        dispatch(setError('Failed to fetch recipes'));
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch]
  );

  return { fetchRecipes };
};

import {
  setError,
  setLoading,
  setRandomRecipes
} from '@components/state/randomRecipeSlice';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { API_KEY } from '@/constants';
import { RandomRecipeResponse } from '@/types/RandomRecipe';
import { fetchData } from '@utils/fetch';

export const useFetchRandomRecipes = () => {
  const dispatch = useDispatch();

  const fetchRandomRecipes = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const data = await fetchData<RandomRecipeResponse>(
        `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=3`
      );
      dispatch(setRandomRecipes(data.recipes));
    } catch (error) {
      console.error('Error fetching data:', error);
      dispatch(setError('Failed to fetch random recipes'));
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  return { fetchRandomRecipes };
};

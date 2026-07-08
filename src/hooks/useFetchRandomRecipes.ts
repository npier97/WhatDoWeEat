import { setRandomRecipes } from '@/components/state/randomRecipeSlice';
import { setRecipes } from '@/components/state/recipeSlice';
import { useDispatch } from 'react-redux';
import { API_KEY } from '@/constants';
import { RecipeDetailProps, RandomRecipeResponse } from '@/types/RecipeDetail';
import { fetchData } from '@utils/fetch';

export const useFetchRandomRecipes = () => {
  const dispatch = useDispatch();
  const fetchRandomRecipes = async (): Promise<RecipeDetailProps[]> => {
    const data = await fetchData<RandomRecipeResponse>(
      `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=3`
    );

    dispatch(setRandomRecipes(data.recipes));
    dispatch(setRecipes([]));

    return data.recipes;
  };

  return { fetchRandomRecipes };
};

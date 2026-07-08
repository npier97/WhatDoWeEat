import { useDispatch } from 'react-redux';
import SparkleIcon from '@/icons/SparkeIcon';
import { GenerateRecipeButton } from './components';
import { useQuery } from '@tanstack/react-query';
import { fetchRandomRecipes } from '@/api/recipes';
import { useEffect } from 'react';
import { setRandomRecipes } from '../state/randomRecipeSlice';
import { setRecipes } from '../state/recipeSlice';

const RandomRecipeGenerator = () => {
  const dispatch = useDispatch();

  const {
    data: randomRecipes,
    isFetching,
    refetch
  } = useQuery({
    queryKey: ['randomRecipes'],
    queryFn: fetchRandomRecipes,
    enabled: false
  });

  const handleGenerationClick = () => refetch();

  useEffect(() => {
    if (randomRecipes) {
      dispatch(setRandomRecipes(randomRecipes));
      dispatch(setRecipes([]));
    }
  }, [randomRecipes, dispatch]);

  return (
    <GenerateRecipeButton
      onClick={handleGenerationClick}
      data-testid='random-recipe-generator'
      disabled={isFetching}
    >
      Get more <SparkleIcon />
    </GenerateRecipeButton>
  );
};

export default RandomRecipeGenerator;

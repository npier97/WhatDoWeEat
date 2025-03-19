import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Box } from 'components-library';
import RecipeList from './RecipeList';

const RandomRecipes = () => {
  const randomRecipes = useSelector(
    (state: RootState) => state.randomRecipe.recipes
  );
  const loading = useSelector((state: RootState) => state.randomRecipe.loading);

  if (!randomRecipes?.length) return null;

  return (
    <Box
      className='flex max-[1023px]:flex-col gap-8'
      data-testid='random-recipes'
    >
      <RecipeList recipes={randomRecipes} loading={loading} />
    </Box>
  );
};

export default RandomRecipes;

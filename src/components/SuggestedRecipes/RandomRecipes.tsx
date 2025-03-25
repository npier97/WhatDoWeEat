import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Box } from 'components-library';
import RecipeList from './RecipeList';

const RandomRecipes = () => {
  const { recipes, loading } = useSelector(
    (state: RootState) => state.randomRecipe
  );

  if (!recipes?.length) return null;

  return (
    <Box
      className='flex max-[1023px]:flex-col gap-8'
      data-testid='random-recipes'
    >
      <RecipeList recipes={recipes} loading={loading} />
    </Box>
  );
};

export default RandomRecipes;

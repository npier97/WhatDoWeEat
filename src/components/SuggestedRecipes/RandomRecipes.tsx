import { Box } from 'components-library';
import RecipeList from './RecipeList';
import { useAppSelector } from '@/hooks';

const RandomRecipes = () => {
  const { recipes } = useAppSelector((state) => state.randomRecipe);

  if (!recipes?.length) return null;

  return (
    <Box
      className='flex max-[1023px]:flex-col gap-8'
      data-testid='random-recipes'
    >
      <RecipeList recipes={recipes} />
    </Box>
  );
};

export default RandomRecipes;

import { Box } from 'components-library';
import RecipeList from './RecipeList';
import { useAppSelector } from '@/hooks';

const SearchedRecipes = () => {
  const { recipes } = useAppSelector((state) => state.recipe);

  if (!recipes?.length) return null;

  return (
    <Box
      className='flex max-[1023px]:flex-col gap-8'
      data-testid='searched-recipes'
    >
      <RecipeList recipes={recipes} />
    </Box>
  );
};

export default SearchedRecipes;

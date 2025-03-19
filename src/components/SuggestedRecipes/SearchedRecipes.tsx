import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Box } from 'components-library';
import RecipeList from './RecipeList';

const SearchedRecipes = () => {
  const recipes = useSelector((state: RootState) => state.recipe.recipes);
  const loading = useSelector((state: RootState) => state.recipe.loading);

  if (!recipes?.length) return null;

  return (
    <Box
      className='flex max-[1023px]:flex-col gap-8'
      data-testid='searched-recipes'
    >
      <RecipeList recipes={recipes} loading={loading} />
    </Box>
  );
};

export default SearchedRecipes;

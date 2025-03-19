import { Box } from 'components-library';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { mockedRecipes } from '@mocks/mockedRecipes';
import RecipeList from './RecipeList';

const PopularRecipes = () => {
  const recipes = useSelector((state: RootState) => state.recipe.recipes);
  const randomRecipes = useSelector(
    (state: RootState) => state.randomRecipe.recipes
  );
  const loading = useSelector((state: RootState) => state.recipe.loading);

  if ([recipes, randomRecipes].some((arr) => arr.length > 0)) return null;

  return (
    <>
      <Box
        className='flex max-[1023px]:flex-col gap-8'
        data-testid='popular-recipes'
      >
        <RecipeList recipes={mockedRecipes} loading={loading} />
      </Box>
    </>
  );
};

export default PopularRecipes;

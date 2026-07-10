import { Box } from 'components-library';
import { mockedRecipes } from '@/mocks/mockedRecipes';
import RecipeList from './RecipeList';
import { useAppSelector } from '@/hooks';

const PopularRecipes = () => {
  const viewMode = useAppSelector((state) => state.recipe.viewMode);

  if (viewMode !== 'popular') return null;

  return (
    <>
      <Box
        className='flex max-[1023px]:flex-col gap-8'
        data-testid='popular-recipes'
      >
        <RecipeList recipes={mockedRecipes} />
      </Box>
    </>
  );
};

export default PopularRecipes;

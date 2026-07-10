import { Box } from 'components-library';
import RecipeList from './RecipeList';
import { useQuery } from '@tanstack/react-query';
import { fetchRandomRecipes } from '@/api/recipes';
import RecipeResultsState from './RecipeResultsState';
import { useAppSelector } from '@/hooks';

const RandomRecipes = () => {
  const viewMode = useAppSelector((state) => state.recipe.viewMode);
  const {
    data: recipes,
    isFetching,
    isError,
    isSuccess
  } = useQuery({
    queryKey: ['randomRecipes'],
    queryFn: fetchRandomRecipes,
    enabled: false
  });

  if (viewMode !== 'random') return null;

  if (isFetching || isError || !recipes?.length) {
    return (
      <RecipeResultsState
        isFetching={isFetching}
        isError={isError}
        isEmpty={isSuccess && recipes.length === 0}
      />
    );
  }

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

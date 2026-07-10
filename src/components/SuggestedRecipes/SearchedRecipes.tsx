import { Box } from 'components-library';
import RecipeList from './RecipeList';
import { useQuery } from '@tanstack/react-query';
import { fetchRecipesByIngredients } from '@/api/recipes';
import RecipeResultsState from './RecipeResultsState';
import { useAppSelector } from '@/hooks';

const SearchedRecipes = () => {
  const { queryParams, viewMode } = useAppSelector((state) => state.recipe);
  const {
    data: recipes,
    isFetching,
    isError,
    isSuccess
  } = useQuery({
    queryKey: ['recipes', queryParams],
    queryFn: () => fetchRecipesByIngredients(queryParams),
    enabled: Boolean(queryParams) && viewMode === 'searched'
  });

  if (viewMode !== 'searched') return null;

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
      data-testid='searched-recipes'
    >
      <RecipeList recipes={recipes} />
    </Box>
  );
};

export default SearchedRecipes;

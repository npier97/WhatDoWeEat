import { Box } from 'components-library';
import { RecipeSubtitle } from './components';
import PopularRecipes from './PopularRecipes';
import SearchedRecipes from './SearchedRecipes';

const SuggestedRecipes = () => (
  <Box
    className='pt-20 pb-20 bg-gray-50 flex flex-col items-center'
    data-testid='suggested-recipes'
  >
    <RecipeSubtitle>Suggested Recipes</RecipeSubtitle>
    <SearchedRecipes />
    <PopularRecipes />
  </Box>
);

export default SuggestedRecipes;

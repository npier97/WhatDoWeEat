import { Box } from 'components-library';
import { RecipeSubtitle } from './components';
import PopularRecipes from './PopularRecipes';
import SearchedRecipes from './SearchedRecipes';
import RandomRecipes from './RandomRecipes';

const SuggestedRecipes = () => (
  <Box
    className='pt-20 pb-20 bg-gray-50 flex flex-col items-center'
    data-testid='suggested-recipes'
  >
    <RecipeSubtitle>Suggested Recipes</RecipeSubtitle>
    <PopularRecipes />
    <SearchedRecipes />
    <RandomRecipes />
  </Box>
);

export default SuggestedRecipes;

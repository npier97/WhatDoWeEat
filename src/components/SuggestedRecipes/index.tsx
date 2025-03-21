import { Stack } from 'components-library';
import { RecipeSubtitle } from './components';
import PopularRecipes from './PopularRecipes';
import SearchedRecipes from './SearchedRecipes';
import RandomRecipes from './RandomRecipes';

const SuggestedRecipes = () => (
  <Stack
    className='pt-20 pb-20 bg-gray-50 items-center'
    data-testid='suggested-recipes'
  >
    <RecipeSubtitle>Suggested Recipes</RecipeSubtitle>
    <PopularRecipes />
    <SearchedRecipes />
    <RandomRecipes />
  </Stack>
);

export default SuggestedRecipes;

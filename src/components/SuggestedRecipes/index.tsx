import { Box } from "components-library";
import { RecipeSubtitle } from "./components";
import PopularRecipes from "./PopularRecipes";
import { SearchedRecipes } from "./SearchedRecipes";

const SuggestedRecipes = () => (
  <Box className="pt-20 pb-40 flex flex-col items-center">
    <RecipeSubtitle>Suggested Recipes</RecipeSubtitle>
    <Box className="flex gap-8">
      <SearchedRecipes />
      <PopularRecipes />
    </Box>
  </Box>
);

export default SuggestedRecipes;

import { Box, Text } from "components-library";
import { RecipeButton } from "./components";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const PopularRecipes = () => {
  const recipes = useSelector((state: RootState) => state.recipe.recipes);

  if (recipes.length > 0) return null;

  return (
    <>
      <Box>
        <img src="./src/assets/spaghettis.jpg" alt="spaghettis" width="200px" />
        <Box className="p-8">
          <Text>Title</Text>
          <Text>Description</Text>
          <RecipeButton>See full recipe</RecipeButton>
        </Box>
      </Box>
      <Box>
        <img src="./src/assets/spaghettis.jpg" alt="spaghettis" width="200px" />
        <Box className="p-8">
          <Text>Title</Text>
          <Text>Description</Text>
          <RecipeButton>See full recipe</RecipeButton>
        </Box>
      </Box>
      <Box>
        <img src="./src/assets/spaghettis.jpg" alt="spaghettis" width="200px" />
        <Box className="p-8">
          <Text>Title</Text>
          <Text>Description</Text>
          <RecipeButton>See full recipe</RecipeButton>
        </Box>
      </Box>
    </>
  );
};

export default PopularRecipes;

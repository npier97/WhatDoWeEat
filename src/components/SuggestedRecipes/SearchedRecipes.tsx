import { Box, Text } from "components-library";
import { RecipeButton, RecipeContainer } from "./components";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const SearchedRecipes = () => {
  const recipes = useSelector((state: RootState) => state.recipe.recipes);

  if (!recipes) return null;

  return (
    <>
      {recipes.map((recipe) => (
        <RecipeContainer key={`${recipe}`}>
          <img src={recipe.image} alt={recipe.title} width="200px" />
          <Box className="p-8">
            <Text>{recipe.title}</Text>
            <Text>{recipe.title}</Text>
            <RecipeButton>See full recipe</RecipeButton>
          </Box>
        </RecipeContainer>
      ))}
    </>
  );
};

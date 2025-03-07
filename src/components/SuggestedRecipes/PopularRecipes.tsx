import { Box } from "components-library";
import {
  DescriptionContainer,
  DescriptionText,
  DescriptionTitle,
  RecipeButton,
  RecipeContainer,
} from "./components";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const PopularRecipes = () => {
  const recipes = useSelector((state: RootState) => state.recipe.recipes);

  if (recipes.length > 0) return null;

  return (
    <Box className="flex gap-8" data-testid="popular-recipes">
      <RecipeContainer>
        <img src="./src/assets/spaghettis.jpg" alt="spaghettis" width="100%" />
        <DescriptionContainer>
          <DescriptionTitle>Title</DescriptionTitle>
          <DescriptionText>Description</DescriptionText>
          <RecipeButton>See full recipe</RecipeButton>
        </DescriptionContainer>
      </RecipeContainer>
      <RecipeContainer>
        <img src="./src/assets/spaghettis.jpg" alt="spaghettis" width="100%" />
        <DescriptionContainer>
          <DescriptionTitle>Title</DescriptionTitle>
          <DescriptionText>Description</DescriptionText>
          <RecipeButton>See full recipe</RecipeButton>
        </DescriptionContainer>
      </RecipeContainer>
      <RecipeContainer>
        <img src="./src/assets/spaghettis.jpg" alt="spaghettis" width="100%" />
        <DescriptionContainer>
          <DescriptionTitle>Title</DescriptionTitle>
          <DescriptionText>Description</DescriptionText>
          <RecipeButton>See full recipe</RecipeButton>
        </DescriptionContainer>
      </RecipeContainer>
    </Box>
  );
};

export default PopularRecipes;

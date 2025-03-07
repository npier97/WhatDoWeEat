import { Text } from "components-library";
import {
  DescriptionContainer,
  PopularRecipesTitle,
  RecipeButton,
  RecipeContainer,
} from "./components";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const PopularRecipes = () => {
  const recipes = useSelector((state: RootState) => state.recipe.recipes);

  if (recipes.length > 0) return null;

  return (
    <>
      <RecipeContainer>
        <img src="./src/assets/spaghettis.jpg" alt="spaghettis" width="100%" />
        <DescriptionContainer>
          <PopularRecipesTitle>Title</PopularRecipesTitle>
          <Text className="mb-8">Description</Text>
          <RecipeButton>See full recipe</RecipeButton>
        </DescriptionContainer>
      </RecipeContainer>
      <RecipeContainer>
        <img src="./src/assets/spaghettis.jpg" alt="spaghettis" width="100%" />
        <DescriptionContainer>
          <PopularRecipesTitle>Title</PopularRecipesTitle>
          <Text className="mb-8">Description</Text>
          <RecipeButton>See full recipe</RecipeButton>
        </DescriptionContainer>
      </RecipeContainer>
      <RecipeContainer>
        <img src="./src/assets/spaghettis.jpg" alt="spaghettis" width="100%" />
        <DescriptionContainer>
          <PopularRecipesTitle>Title</PopularRecipesTitle>
          <Text className="mb-8">Description</Text>
          <RecipeButton>See full recipe</RecipeButton>
        </DescriptionContainer>
      </RecipeContainer>
    </>
  );
};

export default PopularRecipes;

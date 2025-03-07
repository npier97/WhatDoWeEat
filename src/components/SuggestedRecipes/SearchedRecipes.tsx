import { Text } from "components-library";
import {
  DescriptionContainer,
  RecipeButton,
  RecipeContainer,
} from "./components";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const SearchedRecipes = () => {
  const recipes = useSelector((state: RootState) => state.recipe.recipes);

  if (!recipes) return null;

  return (
    <>
      {recipes.map((recipe) => (
        <RecipeContainer key={`${recipe}`}>
          <img src={recipe.image} alt={recipe.title} width="100%" />
          <DescriptionContainer>
            <Text className="font-bold">{recipe.title}</Text>
            <Text className="mb-8">{recipe.title}</Text>
            <RecipeButton>See full recipe</RecipeButton>
          </DescriptionContainer>
        </RecipeContainer>
      ))}
    </>
  );
};

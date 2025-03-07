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
import { Spinner } from "../Spinner";

export const SearchedRecipes = () => {
  const recipes = useSelector((state: RootState) => state.recipe.recipes);
  const loading = useSelector((state: RootState) => state.recipe.loading);

  if (loading) return (
    <Box className="h-95 flex items-center gap-8" data-testid="suggested-recipes-spinner">
      <Spinner />
    </Box>
  )

  if (!recipes) return null;

  return (
    <Box className="flex gap-8" data-testid="searched-recipes">
      {recipes.map((recipe) => (
        <RecipeContainer key={`${recipe}`} data-testid="searched-recipes">
          <img src={recipe.image} alt={recipe.title} width="100%" />
          <DescriptionContainer>
            <DescriptionTitle>{recipe.title}</DescriptionTitle>
            <DescriptionText>{recipe.title}</DescriptionText>
            <RecipeButton>See full recipe</RecipeButton>
          </DescriptionContainer>
        </RecipeContainer>
      ))}
    </Box>
  );
};

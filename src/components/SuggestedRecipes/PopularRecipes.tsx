import { Box } from 'components-library';
import {
  DescriptionContainer,
  DescriptionText,
  DescriptionTitle,
  RecipeButton,
  RecipeContainer
} from './components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { mockedRecipes } from '@mocks/mockedRecipes';
import RecipeModal from './RecipeModal';
import { setIsOpen } from '../state/recipeModal';
import { useState } from 'react';

const PopularRecipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipe.recipes);
  const randomRecipes = useSelector(
    (state: RootState) => state.randomRecipe.recipes
  );
  const loading = useSelector((state: RootState) => state.recipe.loading);
  const [selectedRecipe, setSelectedRecipe] = useState('');

  const handleClick = (description: string) => {
    setSelectedRecipe(description);
    dispatch(setIsOpen(true));
  };

  if ([recipes, randomRecipes].some((arr) => arr.length > 0) || loading)
    return null;

  return (
    <>
      <Box
        className='flex max-[1023px]:flex-col gap-8'
        data-testid='popular-recipes'
      >
        {Object.entries(mockedRecipes).map(([id, recipe], index) => (
          <RecipeContainer key={id} index={index}>
            <img src={recipe.image} alt={recipe.title} width='100%' />
            <DescriptionContainer>
              <DescriptionTitle>{recipe.title}</DescriptionTitle>
              <DescriptionText>{recipe.description}</DescriptionText>
              <RecipeButton onClick={() => handleClick(recipe.description)}>
                See full recipe
              </RecipeButton>
            </DescriptionContainer>
          </RecipeContainer>
        ))}
      </Box>
      <RecipeModal instructions={selectedRecipe} />
    </>
  );
};

export default PopularRecipes;

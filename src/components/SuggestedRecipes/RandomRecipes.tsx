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
import { Spinner } from '../Spinner';
import { cleanText } from '@/utils/string';
import RecipeModal from './RecipeModal';
import { useState } from 'react';
import { setIsOpen } from '../state/recipeModal';

const RandomRecipes = () => {
  const dispatch = useDispatch();
  const randomRecipes = useSelector(
    (state: RootState) => state.randomRecipe.recipes
  );
  const loading = useSelector((state: RootState) => state.randomRecipe.loading);
  const [selectedRecipe, setSelectedRecipe] = useState('');
  const placeholderImage = './src/assets/placeholder.webp';

  const handleClick = (description: string) => {
    setSelectedRecipe(description);
    dispatch(setIsOpen(true));
  };

  if (loading)
    return (
      <Box
        className='h-95 flex items-center gap-8'
        data-testid='suggested-recipes-spinner'
      >
        <Spinner />
      </Box>
    );

  if (!randomRecipes?.length) return null;

  return (
    <>
      <Box
        className='flex max-[1023px]:flex-col gap-8'
        data-testid='random-recipes'
      >
        {randomRecipes.map((recipe, index) => {
          const summary = cleanText(recipe.summary);
          const instructions = cleanText(recipe.instructions);

          return (
            <RecipeContainer key={recipe.title} index={index}>
              <img
                src={recipe.image}
                alt={recipe.title}
                width='100%'
                className='object-cover'
                onError={(e) => (e.currentTarget.src = placeholderImage)}
              />
              <DescriptionContainer>
                <DescriptionTitle>{recipe.title}</DescriptionTitle>
                <DescriptionText>{summary}</DescriptionText>
                <RecipeButton onClick={() => handleClick(instructions)}>
                  See full recipe
                </RecipeButton>
              </DescriptionContainer>
            </RecipeContainer>
          );
        })}
      </Box>
      <RecipeModal instructions={selectedRecipe} />
    </>
  );
};

export default RandomRecipes;

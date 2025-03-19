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
import RecipeModal from './RecipeModal';
import { useState } from 'react';
import { setIsOpen } from '../state/recipeModal';

const SearchedRecipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipe.recipes);
  const loading = useSelector((state: RootState) => state.recipe.loading);
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

  if (!recipes?.length) return null;

  return (
    <>
      <Box
        className='flex max-[1023px]:flex-col gap-8'
        data-testid='searched-recipes'
      >
        {recipes.map((recipe, index) => (
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
              <DescriptionText>{recipe.title}</DescriptionText>
              <RecipeButton onClick={() => handleClick(recipe.title)}>
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

export default SearchedRecipes;

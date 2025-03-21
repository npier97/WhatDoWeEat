import { RecipeListProps } from '@/types/RecipeList';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setIsOpen } from '@state/recipeModal';
import { Box } from 'components-library';
import { Spinner } from '@components/Spinner';
import {
  DescriptionContainer,
  DescriptionText,
  DescriptionTitle,
  RecipeButton,
  RecipeContainer
} from './components';
import RecipeModal from './RecipeModal';

const RecipeList = ({ recipes, loading }: RecipeListProps) => {
  const dispatch = useDispatch();
  const [selectedRecipe, setSelectedRecipe] = useState('');
  const placeholderImage = 'images/placeholder.webp';

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

  return (
    <>
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
            <DescriptionText summary={recipe.summary} />
            <RecipeButton
              onClick={() =>
                handleClick(
                  recipe.instructions || 'Instructions are not available yet'
                )
              }
            >
              See full recipe
            </RecipeButton>
          </DescriptionContainer>
        </RecipeContainer>
      ))}
      <RecipeModal instructions={selectedRecipe} />
    </>
  );
};

export default RecipeList;

import type { Recipe } from '@/types/Recipe';
import { useState } from 'react';
import {
  DescriptionContainer,
  DescriptionText,
  DescriptionTitle,
  RecipeButton,
  RecipeContainer
} from './components';
import RecipeModal from './RecipeModal';

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList = ({ recipes }: RecipeListProps) => {
  const [selectedRecipe, setSelectedRecipe] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const placeholderImage = 'images/placeholder.webp';

  const handleClick = (description: string) => {
    setSelectedRecipe(description);
    setIsModalOpen(true);
  };

  const handleModalClose = () => setIsModalOpen(false);

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
            <RecipeButton onClick={() => handleClick(recipe.summary)}>
              See summary
            </RecipeButton>
            <RecipeButton
              onClick={() =>
                handleClick(
                  recipe.instructions || 'Instructions are not available yet'
                )
              }
            >
              See instructions
            </RecipeButton>
          </DescriptionContainer>
        </RecipeContainer>
      ))}
      <RecipeModal
        instructions={selectedRecipe}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
};

export default RecipeList;

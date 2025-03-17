import { Box } from 'components-library';
import {
  DescriptionContainer,
  DescriptionText,
  DescriptionTitle,
  RecipeButton,
  RecipeContainer
} from './components';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Spinner } from '../Spinner';
import { cleanText } from '@/utils/string';

const RandomRecipes = () => {
  const randomRecipes = useSelector(
    (state: RootState) => state.randomRecipe.recipes
  );
  const loading = useSelector((state: RootState) => state.randomRecipe.loading);
  const placeholderImage = './src/assets/placeholder.webp';

  if (loading)
    return (
      <Box
        className='h-95 flex items-center gap-8'
        data-testid='suggested-recipes-spinner'
      >
        <Spinner />
      </Box>
    );

  if (!randomRecipes) return null;

  return (
    <Box
      className='flex max-[1023px]:flex-col gap-8'
      data-testid='random-recipes'
    >
      {randomRecipes.map((recipe, index) => {
        const summary = cleanText(recipe.summary);

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
              <RecipeButton>See full recipe</RecipeButton>
            </DescriptionContainer>
          </RecipeContainer>
        );
      })}
    </Box>
  );
};

export default RandomRecipes;

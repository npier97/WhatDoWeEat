import { Box } from 'components-library';
import { HeroButton, HeroInput } from './components';
import { useEffect, useState } from 'react';
import { preventSpecialCharacters } from '@utils/string';
import { useFetchRecipes } from '@hooks/useFetchRecipes';
import { useDispatch, useSelector } from 'react-redux';
import { setTags } from '@state/tagSlice';
import { RootState } from '@/store';
import RandomRecipeGenerator from './RandomRecipeGenerator';
import { useFetchRandomRecipes } from '@/hooks/useFetchRandomRecipes';
import { setIngredients, setRecipes } from '@state/recipeSlice';
import { setRandomRecipes } from '@state/randomRecipeSlice';

const HeroActions = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>('');
  const ingredients = useSelector(
    (state: RootState) => state.recipe.ingredients
  );
  const tags = useSelector((state: RootState) => state.tag.tags);

  const { fetchRecipes } = useFetchRecipes();
  const { fetchRandomRecipes } = useFetchRandomRecipes();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    preventSpecialCharacters(event);

    if (event.code === 'Space' || event.code === 'Enter') {
      event.preventDefault();

      if (!inputValue || tags.includes(inputValue)) return;

      dispatch(setTags([...tags, inputValue]));
      setInputValue('');
    }
  };

  const handleClick = () => {
    if (!inputValue && tags.length === 0) return;

    const filteredTags = tags.filter((item) => !ingredients.includes(item));
    const typedIngredient = !ingredients.includes(inputValue) ? inputValue : '';

    dispatch(setIngredients([typedIngredient, ...filteredTags]));
    dispatch(setTags([]));
    dispatch(setRandomRecipes([]));
    setInputValue('');
  };

  const handleGenerationClick = () => {
    fetchRandomRecipes();
    dispatch(setRecipes([]));
  };

  useEffect(() => {
    if (ingredients.length > 0) {
      const queryParams = ingredients.join(',+');
      fetchRecipes(queryParams);
    }
  }, [ingredients]);

  return (
    <Box className='w-full mb-4 flex max-[1023px]:flex-col items-center justify-center gap-4'>
      <HeroInput
        name='ingredients'
        type='text'
        value={inputValue}
        placeholder='Type an ingredient and press Enter or Space'
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        data-testid='hero-input'
        aria-label='Search input'
      />
      <HeroButton onClick={handleClick} data-testid='hero-button'>
        Search recipes
      </HeroButton>
      <RandomRecipeGenerator onClick={handleGenerationClick} />
    </Box>
  );
};

export default HeroActions;

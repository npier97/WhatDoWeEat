import { Box } from 'components-library';
import { HeroButton, HeroInput } from './components';
import { useEffect, useState } from 'react';
import { preventSpecialCharacters } from '@/utils/string';
import { useDispatch, useSelector } from 'react-redux';
import { addTag, clearTags } from '@/components/state/tagSlice';
import { RootState } from '@/store';
import RandomRecipeGenerator from './RandomRecipeGenerator';
import {
  setIngredients,
  setQueryParams,
  setRecipes
} from '@/components/state/recipeSlice';
import { setRandomRecipes } from '@/components/state/randomRecipeSlice';
import { useQuery } from '@tanstack/react-query';
import { fetchRecipesByIngredients } from '@/api/recipes';
import { buildIngredientsList, buildQueryParams } from '@/utils/ingredients';
import HeroTag from './HeroTag';

const HeroActions = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>('');
  const ingredients = useSelector(
    (state: RootState) => state.recipe.ingredients
  );
  const queryParams = useSelector(
    (state: RootState) => state.recipe.queryParams
  );
  const tags = useSelector((state: RootState) => state.tag.tags);
  const [hasAttemptedEmptySearch, setHasAttemptedEmptySearch] =
    useState<boolean>(false);

  const { data: recipes, isFetching } = useQuery({
    queryKey: ['recipes', queryParams],
    queryFn: () => fetchRecipesByIngredients(queryParams),
    enabled: Boolean(queryParams)
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    preventSpecialCharacters(event);

    if (event.code === 'Space' || event.code === 'Enter') {
      event.preventDefault();

      if (!inputValue.trim()) return;

      dispatch(addTag(inputValue));
      setInputValue('');
      setHasAttemptedEmptySearch(false);
    }
  };

  const handleClick = () => {
    if (!inputValue && tags.length === 0) {
      setHasAttemptedEmptySearch(true);
      return;
    }

    setHasAttemptedEmptySearch(false);
    dispatch(setQueryParams(buildQueryParams(tags, ingredients, inputValue)));
    dispatch(
      setIngredients(buildIngredientsList(tags, ingredients, inputValue))
    );
    dispatch(clearTags());
    dispatch(setRandomRecipes([]));
    setInputValue('');
  };

  useEffect(() => {
    if (recipes) {
      dispatch(setRecipes(recipes));
      dispatch(setIngredients([]));
      dispatch(setQueryParams(''));
    }
  }, [recipes, dispatch]);

  return (
    <>
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
        <HeroButton
          onClick={handleClick}
          data-testid='hero-button'
          disabled={isFetching}
        >
          {isFetching ? 'Searching...' : 'Search recipes'}
        </HeroButton>
        <RandomRecipeGenerator onRandomSearch={setHasAttemptedEmptySearch} />
      </Box>
      <HeroTag isInputEmpty={hasAttemptedEmptySearch} />
    </>
  );
};

export default HeroActions;

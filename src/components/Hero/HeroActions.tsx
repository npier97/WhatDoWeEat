import { Box } from 'components-library';
import { HeroButton, HeroInput } from './components';
import { useEffect, useState } from 'react';
import { preventSpecialCharacters } from '@utils/string';
import { useDispatch, useSelector } from 'react-redux';
import { setTags } from '@state/tagSlice';
import { RootState } from '@/store';
import RandomRecipeGenerator from './RandomRecipeGenerator';
import { setIngredients, setQueryParams } from '@state/recipeSlice';
import { setRandomRecipes } from '@state/randomRecipeSlice';
import { useQuery } from '@tanstack/react-query';
import { useFetchRecipes } from '@/hooks/useFetchRecipes';

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

  const { fetchRecipes } = useFetchRecipes();

  const { isFetching, refetch } = useQuery({
    queryKey: ['recipes', queryParams],
    queryFn: () => fetchRecipes(queryParams),
    enabled: false
  });

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

    dispatch(setQueryParams([...filteredTags, typedIngredient].join(',')));
    dispatch(setIngredients([typedIngredient, ...filteredTags]));
    dispatch(setTags([]));
    dispatch(setRandomRecipes([]));
    setInputValue('');
  };

  useEffect(() => {
    if (queryParams) {
      refetch();
    }
  }, [queryParams]);

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
      {/*TODO: handle button color change on fetching and refactor queryParams handler*/}
      <HeroButton
        onClick={handleClick}
        data-testid='hero-button'
        disabled={isFetching}
      >
        {isFetching ? 'Searching...' : 'Search recipes'}
      </HeroButton>
      <RandomRecipeGenerator />
    </Box>
  );
};

export default HeroActions;

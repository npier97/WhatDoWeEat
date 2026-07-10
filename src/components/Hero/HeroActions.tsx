import { Box } from 'components-library';
import { HeroButton, HeroInput } from './components';
import { useState } from 'react';
import { preventSpecialCharacters } from '@/utils/string';
import { addTag, clearTags } from '@/components/state/tagSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';
import RandomRecipeGenerator from './RandomRecipeGenerator';
import { setQueryParams, setViewMode } from '@/components/state/recipeSlice';
import { useIsFetching } from '@tanstack/react-query';
import { buildQueryParams } from '@/utils/ingredients';
import HeroTag from './HeroTag';

const HeroActions = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>('');
  const queryParams = useAppSelector((state) => state.recipe.queryParams);
  const tags = useAppSelector((state) => state.tag.tags);
  const [hasAttemptedEmptySearch, setHasAttemptedEmptySearch] =
    useState<boolean>(false);

  const isFetching =
    useIsFetching({ queryKey: ['recipes', queryParams], exact: true }) > 0;

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
    dispatch(setQueryParams(buildQueryParams(tags, inputValue)));
    dispatch(setViewMode('searched'));
    dispatch(clearTags());
    setInputValue('');
  };

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

import { Box } from 'components-library';
import { HeroButton, HeroInput } from './components';
import { useEffect, useState } from 'react';
import { preventSpecialCharacters } from '@utils/string';
import { useFetchRecipes } from '@hooks/useFetchRecipes';
import { useDispatch, useSelector } from 'react-redux';
import { setTags } from '@state/tagSlice';
import { RootState } from '@/store';

const HeroActions = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const tags = useSelector((state: RootState) => state.tag.tags);

  const { fetchRecipes } = useFetchRecipes();

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

    const newItems = tags.filter((item) => !ingredients.includes(item));

    setIngredients((prevIngredients) => [...prevIngredients, ...newItems]);
    dispatch(setTags([]));
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
        Discover recipes
      </HeroButton>
    </Box>
  );
};

export default HeroActions;

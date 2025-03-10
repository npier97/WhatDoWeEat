import { Box } from 'components-library';
import {
  HeroButton,
  HeroContainer,
  HeroInput,
  HeroSubtitle,
  HeroTitle
} from './components';
import { useEffect, useState } from 'react';
import { preventSpecialCharacters } from '@utils/string';
import HeroInputTag from './HeroInputTag';
import { useFetchRecipes } from '@hooks/useFetchRecipes';

const Hero = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputTags, setInputTags] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<string[]>([]);

  const { fetchRecipes } = useFetchRecipes();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    preventSpecialCharacters(event);

    if (event.code === 'Space' || event.code === 'Enter') {
      event.preventDefault();

      if (!inputValue || inputTags.includes(inputValue)) return;

      setInputTags((prevTags) => [...prevTags, inputValue]);
      setInputValue('');
    }
  };

  const handleClick = () => {
    if (!inputValue && inputTags.length === 0) return;

    const newItems = inputTags.filter((item) => !ingredients.includes(item));

    setIngredients((prevIngredients) => [...prevIngredients, ...newItems]);
    setInputTags([]);
  };

  useEffect(() => {
    if (ingredients.length > 0) {
      const queryParams = ingredients.join(',+');
      fetchRecipes(queryParams);
    }
  }, [ingredients]);

  return (
    <HeroContainer>
      <HeroTitle>What&apos;s In Your Fridge?</HeroTitle>
      <HeroSubtitle>
        Unleash culinary creativity with what you have!
      </HeroSubtitle>
      <Box className='w-full mb-4 flex max-[1023px]:flex-col items-center justify-center gap-4'>
        <HeroInput
          name='text'
          type='text'
          value={inputValue}
          placeholder='Type an ingredient and press Enter or Space'
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          data-testid='hero-input'
        />
        <HeroButton onClick={handleClick} data-testid='hero-button'>
          Discover recipes
        </HeroButton>
      </Box>
      <HeroInputTag inputTags={inputTags} onTagClick={setInputTags} />
    </HeroContainer>
  );
};

export default Hero;

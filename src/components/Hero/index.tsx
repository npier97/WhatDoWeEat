import { Box } from "components-library";
import {
  HeroButton,
  HeroContainer,
  HeroInput,
  HeroSubtitle,
  HeroTitle,
  InputContainer,
} from "./components";
import { useState } from "react";
import { preventSpecialCharacters } from "@utils/string";
import HeroInputTag from "./HeroInputTag";

const Hero = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputTags, setInputTags] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    preventSpecialCharacters(event);

    if (event.code === "Space" || event.code === "Enter") {
      event.preventDefault();

      const trimmedValue = inputValue.trim();
      if (!trimmedValue || inputTags.includes(trimmedValue)) return;

      setInputTags((prevTags) => [...prevTags, trimmedValue]);
      setInputValue("");
    }
  };

  const handleClick = () => {
    const newItems = inputTags.filter((item) => !ingredients.includes(item));

    if (!inputValue.trim() && inputTags.length === 0) return;

    setIngredients([...ingredients, ...newItems]);
    setInputTags([]);
  };

  return (
    <HeroContainer>
      <HeroTitle>What&apos;s In Your Fridge?</HeroTitle>
      <HeroSubtitle>
        Unleash culinary creativity with what you have!
      </HeroSubtitle>
      <Box className="w-full flex items-center justify-center p-8">
        <InputContainer>
          <HeroInput
            name="text"
            type="text"
            value={inputValue}
            placeholder="Type ingredient and press Space"
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <HeroInputTag inputTags={inputTags} onTagClick={setInputTags} />
        </InputContainer>
        <HeroButton onClick={handleClick}>Discover recipes</HeroButton>
      </Box>
    </HeroContainer>
  );
};

export default Hero;

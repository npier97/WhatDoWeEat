import { Box } from "components-library";
import {
  HeroButton,
  HeroContainer,
  HeroInput,
  HeroSubtitle,
  HeroTitle,
} from "./components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { preventSpecialCharacters } from "@utils/string";
import { fetchData } from "@/utils/fetch";
import HeroInputTag from "./HeroInputTag";
import { Recipe } from "@/types/Recipe";
import { setError, setLoading, setRecipes } from "./state/slice";
import { RootState } from "@/store";

const Hero = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.hero.loading);
  const [inputValue, setInputValue] = useState<string>("");
  const [inputTags, setInputTags] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const apiKey = process.env.SPOONACULAR_API_KEY;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    preventSpecialCharacters(event);

    if (event.code === "Space" || event.code === "Enter") {
      event.preventDefault();

      if (!inputValue || inputTags.includes(inputValue)) return;

      setInputTags((prevTags) => [...prevTags, inputValue]);
      setInputValue("");
    }
  };

  const handleClick = () => {
    if (!inputValue && inputTags.length === 0) return;

    const newItems = inputTags.filter((item) => !ingredients.includes(item));

    setIngredients((prevIngredients) => [...prevIngredients, ...newItems]);
    setInputTags([]);
  };

  const fetchRecipes = async (queryParams: string) => {
    dispatch(setLoading(true));
    try {
      //TODO: add functionality to increment or decrement the number of recipes
      const data = await fetchData<Recipe[]>(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${queryParams}&number=3`
      );
      console.log(data);
      dispatch(setRecipes(data));
    } catch (error) {
      console.error("Error fetching data:", error);
      console.log(error);
      dispatch(setError(""));
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (ingredients.length > 0) {
      const queryParams = ingredients.join(",+");
      fetchRecipes(queryParams);
    }
  }, [ingredients]);

  return (
    <HeroContainer>
      <HeroTitle>What&apos;s In Your Fridge?</HeroTitle>
      <HeroSubtitle>
        Unleash culinary creativity with what you have!
      </HeroSubtitle>
      <Box className="w-full mb-4 flex items-center justify-center">
        <HeroInput
          name="text"
          type="text"
          value={inputValue}
          placeholder="Type an ingredient and press Enter or Space"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          data-testid="hero-input"
        />
        <HeroButton onClick={handleClick} data-testid="hero-button">
          Discover recipes
        </HeroButton>
      </Box>
      <HeroInputTag inputTags={inputTags} onTagClick={setInputTags} />
      {loading && <p>Loading...</p>}
    </HeroContainer>
  );
};

export default Hero;

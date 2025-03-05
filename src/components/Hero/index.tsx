import { Box } from "components-library";
import {
  HeroButton,
  HeroContainer,
  HeroInput,
  HeroSubtitle,
  HeroTitle,
} from "./components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { preventSpecialCharacters } from "@utils/string";
import { fetchData } from "@/utils/fetch";
import HeroInputTag from "./HeroInputTag";
import { User } from "@/types/User";
import { setError, setLoading, setUsers } from "./state/slice";
import { RootState } from "@/store";

const Hero = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.hero.loading);
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
    fetchRecipes();
  };

  const fetchRecipes = async () => {
    dispatch(setLoading(true));
    try {
      const data = await fetchData<User[]>(
        "https://reqres.in/api/users?page=2"
      );
      dispatch(setUsers(data));
    } catch (error) {
      console.error("Error fetching data:", error);
      console.log(error);
      dispatch(setError(""));
    } finally {
      dispatch(setLoading(false));
    }
  };

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

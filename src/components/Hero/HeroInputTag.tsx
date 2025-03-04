import { InputSpan } from "./components";
import DeleteIcon from "@icons/DeleteIcon";

interface HeroInputTagProps {
  inputTags: string[];
  onTagClick: (tags: string[]) => void;
}

const HeroInputTag = ({ inputTags, onTagClick }: HeroInputTagProps) => {
  const handleInputTagClick = (tag: string) => {
    const updatedInputTags = inputTags.filter((item) => item !== tag);
    onTagClick([...updatedInputTags]);
  };

  return (
    <>
      {inputTags
        .slice()
        .reverse() /* necessary as flex-row-reverse is used on its container */
        .map((tag: string) => (
          <>
            <InputSpan
              key={`${tag}`}
              className="text-xs"
              onClick={() => handleInputTagClick(tag)}
            >
              {tag}
              <DeleteIcon
                key={`${tag}-icon`}
                className="text-green-600 text-xs"
              />
            </InputSpan>
          </>
        ))}
    </>
  );
};

export default HeroInputTag;

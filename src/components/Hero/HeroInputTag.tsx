import { Box } from 'components-library';
import { InputSpan } from './components';
import DeleteIcon from '@icons/DeleteIcon';

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
    <Box
      id='tags'
      className='max-w-200 min-h-10 max-h-50 flex flex-wrap gap-2'
      data-testid='input-span-container'
    >
      {inputTags.map((tag: string) => (
        <InputSpan
          key={tag}
          onClick={() => handleInputTagClick(tag)}
          data-testid='input-span'
        >
          {tag}
          <DeleteIcon className='text-primary' />
        </InputSpan>
      ))}
    </Box>
  );
};

export default HeroInputTag;

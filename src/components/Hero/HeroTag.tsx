import { TagContainer, TagSpan } from './components';
import DeleteIcon from '@icons/DeleteIcon';

interface HeroInputTagProps {
  tags: string[];
  onTagClick: (tags: string[]) => void;
}

const HeroTag = ({ tags, onTagClick }: HeroInputTagProps) => {
  const handleInputTagClick = (tag: string) => {
    const updatedTags = tags.filter((item) => item !== tag);
    onTagClick([...updatedTags]);
  };

  return (
    <TagContainer>
      {tags.map((tag: string) => (
        <TagSpan
          key={tag}
          onClick={() => handleInputTagClick(tag)}
          data-testid='tag-span'
        >
          {tag}
          <DeleteIcon className='text-primary' />
        </TagSpan>
      ))}
    </TagContainer>
  );
};

export default HeroTag;

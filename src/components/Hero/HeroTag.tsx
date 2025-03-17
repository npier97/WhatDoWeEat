import { useDispatch, useSelector } from 'react-redux';
import { TagContainer, TagSpan } from './components';
import DeleteIcon from '@icons/DeleteIcon';
import { RootState } from '@/store';
import { setTags } from '@state/tagSlice';

const HeroTag = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state: RootState) => state.tag.tags);

  const handleInputTagClick = (tag: string) => {
    const updatedTags = tags.filter((item) => item !== tag);
    dispatch(setTags([...updatedTags]));
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

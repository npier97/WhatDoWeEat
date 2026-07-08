import { useDispatch, useSelector } from 'react-redux';
import { TagContainer, TagSpan } from './components';
import DeleteIcon from '@/icons/DeleteIcon';
import { RootState } from '@/store';
import { setTags } from '@/components/state/tagSlice';

const HeroTag = ({ isInputEmpty }: { isInputEmpty: boolean }) => {
  const dispatch = useDispatch();
  const tags = useSelector((state: RootState) => state.tag.tags);

  const handleInputTagClick = (tag: string) => {
    const updatedTags = tags.filter((item) => item !== tag);
    dispatch(setTags([...updatedTags]));
  };

  return (
    <TagContainer>
      {isInputEmpty ? (
        <span
          role='alert'
          className='rounded-md border border-red-300 bg-red-50 px-4 py-2 text-sm font-medium text-red-800'
        >
          Please add at least one ingredient
        </span>
      ) : (
        <>
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
        </>
      )}
    </TagContainer>
  );
};

export default HeroTag;

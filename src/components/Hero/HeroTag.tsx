import { useDispatch, useSelector } from 'react-redux';
import { TagContainer, TagItem, TagRemoveButton } from './components';
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

  if (isInputEmpty) {
    return (
      <span
        role='alert'
        className='rounded-md border border-red-300 bg-red-50 px-4 py-2 text-sm font-medium text-red-800'
      >
        Please add at least one ingredient
      </span>
    );
  }

  return (
    <TagContainer>
      {tags.map((tag: string) => (
        <TagItem key={tag} data-testid='tag-item'>
          <TagRemoveButton
            aria-label={`Remove ${tag}`}
            onClick={() => handleInputTagClick(tag)}
          >
            <span>{tag}</span>
            <span aria-hidden='true'>
              <DeleteIcon className='text-primary' />
            </span>
          </TagRemoveButton>
        </TagItem>
      ))}
    </TagContainer>
  );
};

export default HeroTag;

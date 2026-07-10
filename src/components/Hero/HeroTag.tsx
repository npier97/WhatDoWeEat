import { TagContainer, TagItem, TagRemoveButton } from './components';
import DeleteIcon from '@/icons/DeleteIcon';
import { removeTag } from '@/components/state/tagSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';

const HeroTag = ({ isInputEmpty }: { isInputEmpty: boolean }) => {
  const dispatch = useAppDispatch();
  const tags = useAppSelector((state) => state.tag.tags);

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
            onClick={() => dispatch(removeTag(tag))}
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

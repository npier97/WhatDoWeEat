import { RootState } from '@/store';
import { Modal, Text } from 'components-library';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen } from '../state/recipeModal';
import { RecipeButton } from './components';

const RecipeModal = ({ instructions }: { instructions: string }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(
    (state: RootState) => state.recipeModal.isOpen
  );

  const handleClose = () => dispatch(setIsOpen(false));

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={handleClose}
      className='bg-transparent'
      contentClassName='flex justify-center'
    >
      <Text className='pb-4'>{instructions}</Text>
      <RecipeButton onClick={handleClose}>Close</RecipeButton>
    </Modal>
  );
};

export default RecipeModal;

import { Modal, Text } from 'components-library';
import { RecipeButton } from './components';
import { sanitizeHtml } from '@/utils/sanitizeHtml';

interface RecipeModalProps {
  instructions: string;
  isOpen: boolean;
  onClose: () => void;
}

const RecipeModal = ({ instructions, isOpen, onClose }: RecipeModalProps) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    className='bg-transparent'
    contentClassName='flex justify-center'
  >
    <Text
      className='pb-4'
      dangerouslySetInnerHTML={{ __html: sanitizeHtml(instructions) }}
    />
    <RecipeButton onClick={onClose}>Close</RecipeButton>
  </Modal>
);

export default RecipeModal;

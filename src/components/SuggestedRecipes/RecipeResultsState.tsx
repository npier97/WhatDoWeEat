import { Spinner } from '@/components/Spinner';

interface RecipeResultsStateProps {
  isFetching: boolean;
  isError: boolean;
  isEmpty: boolean;
}

const RecipeResultsState = ({
  isFetching,
  isError,
  isEmpty
}: RecipeResultsStateProps) => {
  if (isFetching) {
    return (
      <div
        className='min-h-95 flex items-center justify-center'
        data-testid='results-loading'
      >
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <p role='alert' className='min-h-95 flex items-center text-red-700'>
        We could not load the recipes. Please try again.
      </p>
    );
  }

  if (isEmpty) {
    return (
      <p role='status' className='min-h-95 flex items-center text-gray-700'>
        No recipes were found.
      </p>
    );
  }

  return null;
};

export default RecipeResultsState;

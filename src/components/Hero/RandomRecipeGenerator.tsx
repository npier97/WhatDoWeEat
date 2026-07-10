import SparkleIcon from '@/icons/SparkeIcon';
import { GenerateRecipeButton } from './components';
import { useQuery } from '@tanstack/react-query';
import { fetchRandomRecipes } from '@/api/recipes';
import { setViewMode } from '../state/recipeSlice';
import { useAppDispatch } from '@/hooks';
import { clearTags } from '../state/tagSlice';

const RandomRecipeGenerator = ({
  onRandomSearch
}: {
  onRandomSearch: (value: boolean) => void;
}) => {
  const dispatch = useAppDispatch();

  const { isFetching, refetch } = useQuery({
    queryKey: ['randomRecipes'],
    queryFn: fetchRandomRecipes,
    enabled: false
  });

  const handleGenerationClick = () => {
    refetch();
    dispatch(clearTags());
    dispatch(setViewMode('random'));
    onRandomSearch(false);
  };

  return (
    <GenerateRecipeButton
      onClick={handleGenerationClick}
      data-testid='random-recipe-generator'
      disabled={isFetching}
      aria-busy={isFetching}
    >
      {isFetching ? 'Generating...' : 'Get more'} <SparkleIcon />
    </GenerateRecipeButton>
  );
};

export default RandomRecipeGenerator;

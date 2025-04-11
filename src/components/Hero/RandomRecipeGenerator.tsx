import SparkleIcon from '@/icons/SparkeIcon';
import { GenerateRecipeButton } from './components';
import { useQuery } from '@tanstack/react-query';
import { useFetchRandomRecipes } from '@/hooks/useFetchRandomRecipes';

const RandomRecipeGenerator = () => {
  const { fetchRandomRecipes } = useFetchRandomRecipes();

  const { isFetching, refetch } = useQuery({
    queryKey: ['randomRecipes'],
    queryFn: fetchRandomRecipes,
    enabled: false
  });

  const handleGenerationClick = () => refetch();

  return (
    //TODO: handle button color change on fetching
    <GenerateRecipeButton
      onClick={handleGenerationClick}
      data-testid='random-recipe-generator'
      disabled={isFetching}
    >
      Get more <SparkleIcon />
    </GenerateRecipeButton>
  );
};

export default RandomRecipeGenerator;

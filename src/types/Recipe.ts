export interface RecipeProps {
  id: number;
  image: string;
  imageType: string;
  likes: string;
  missedIngredientCount: number;
  missedIngredients: IngredientProps[];
  usedIngredientCount: number;
  usedIngredients: IngredientProps[];
  title: string;
}

type IngredientProps = {
  aisle: string;
  amount: number;
  id: number;
  image: string;
  name: string;
  original: string;
  originalName: string;
  unit: string;
  unitLong: string;
  unitShort: string;
};

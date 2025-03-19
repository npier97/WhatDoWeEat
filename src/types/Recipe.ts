export interface RecipeProps {
  id: number;
  title: string;
  image?: string;
  likes?: string;
  missedIngredientCount?: number;
  missedIngredients?: IngredientProps[];
  usedIngredientCount?: number;
  usedIngredients?: IngredientProps[];
}

export type IngredientProps = {
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

export interface RecipeContainerProps {
  children: React.ReactNode;
  index: number;
}

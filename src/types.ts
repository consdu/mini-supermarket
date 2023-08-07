export interface ProductStructure {
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
  price_id: string;
  quantity: number;
  nutrition: {
    calories: number;
    carbs: number;
    fat: number;
    protein: number;
    salt: number;
  };
  storage: string;
}

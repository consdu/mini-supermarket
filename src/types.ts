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

export interface CartProductStructure extends ProductStructure {
  quantity: number;
}

export type CartStructure = CartProductStructure[];

export interface CartContextStructure {
  cart: CartStructure;
  onProductAdd: (product: ProductStructure) => void;
  onProductDelete: (id: number) => void;
  getCartCount: () => number;
  getTotalPrice: () => number;
  getProductFromCart: (id: number) => CartProductStructure | undefined;
}

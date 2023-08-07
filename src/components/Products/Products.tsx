import Product from "../Product/Product";
import useSWR, { SWRResponse } from "swr";
import Loader from "../Loader/Loader";
import { ProductStructure } from "../../types";

interface ProductsProps {
  cart: ProductStructure[];
  onProductAdd: (product: ProductStructure) => void;
  onProductDelete: (id: number) => void;
}

const Products = (props: ProductsProps) => {
  const {
    data: products = [],
    isValidating: loading,
    error,
  }: SWRResponse<ProductStructure[], Error> = useSWR(
    "https://react-tutorial-demo.firebaseio.com/supermarket.json"
  );

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading && <Loader />}
        {error && (
          <p>
            There was an error loading the products. Please try again later.
          </p>
        )}
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              details={product}
              cart={props.cart}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;

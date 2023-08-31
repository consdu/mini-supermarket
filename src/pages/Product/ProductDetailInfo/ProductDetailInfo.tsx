import { ProductStructure } from "../../../types";
import Button from "../../../components/Button/Button";

interface ProductDetailInfoProps {
  product: ProductStructure;
  onProductAdd: (product: ProductStructure) => void;
}

const ProductDetailInfo = ({
  product,
  onProductAdd,
}: ProductDetailInfoProps) => {
  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <Button onClick={() => onProductAdd(product)} type="button">
        ${product.price}
      </Button>
    </>
  );
};

export default ProductDetailInfo;

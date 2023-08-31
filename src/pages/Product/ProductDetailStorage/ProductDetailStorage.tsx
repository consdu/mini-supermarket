interface ProductDetailStorageProps {
  storage: string;
}

const ProductDetailStorage = ({
  storage,
}: ProductDetailStorageProps): React.ReactElement => {
  return (
    <p>
      <strong>Storage instructions:</strong> {storage}
    </p>
  );
};

export default ProductDetailStorage;

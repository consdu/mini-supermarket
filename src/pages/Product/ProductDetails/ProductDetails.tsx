import { useLocation, Link, Routes, Route, useParams } from "react-router-dom";
import useSWR, { SWRResponse } from "swr";
import ProductDetailInfo from "../ProductDetailInfo/ProductDetailInfo";
import ProductDetailNutrition from "../ProductDetailNutrition/ProductDetailNutrition";
import ProductDetailStorage from "../ProductDetailStorage/ProductDetailStorage";
import { ProductStructure } from "../../../types";
import useCart from "../../../hooks/useCart/useCart";

const ProductDetails = (): React.ReactElement => {
  const { onProductAdd } = useCart();
  const params = useParams();
  const { pathname } = useLocation();

  const {
    data: product = {
      name: "",
      image: "",
      description: "",
      price: 0,
      id: 0,
      price_id: "",
      quantity: 0,
      nutrition: {
        calories: 0,
        carbs: 0,
        fat: 0,
        protein: 0,
        salt: 0,
      },
      storage: "",
    },
    error,
  }: SWRResponse<ProductStructure, Error, any> = useSWR(
    `https://react-tutorial-demo.firebaseio.com/productinfo/id${params.id}.json`
  );

  if (error) {
    return <p>Could not load product details. Please try again later.</p>;
  }

  return (
    <div className="product-details-layout">
      <div>
        <h2>{product.name}</h2>
        <img
          src={product.image}
          width="125"
          height="125"
          className="product-details-image"
          alt={product.name}
        />
      </div>
      <div>
        <div className="tabs">
          <ul>
            <li>
              <Link
                className={pathname.match(/\d$/) ? "tab-active" : ""}
                to={""}
              >
                Details
              </Link>
            </li>
            <li>
              <Link
                className={pathname.includes("/nutrition") ? "tab-active" : ""}
                to={"nutrition"}
              >
                Nutrition
              </Link>
            </li>
            <li>
              <Link
                className={pathname.includes("/storage") ? "tab-active" : ""}
                to={"storage"}
              >
                Storage
              </Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <ProductDetailInfo
                onProductAdd={onProductAdd}
                product={product}
              />
            }
          ></Route>

          <Route
            path={"nutrition"}
            element={<ProductDetailNutrition nutrition={product.nutrition} />}
          ></Route>

          <Route
            path={"storage"}
            element={<ProductDetailStorage storage={product.storage} />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default ProductDetails;

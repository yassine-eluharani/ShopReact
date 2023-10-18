import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import fetchDataById from "../utils/useFetchProductById";
import "./styles/ProductPage.scss";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartReducer";

const ProductPage = () => {
  const { id } = useParams();
  const { isPending, error, data } = useQuery(["product", id], () =>
    fetchDataById(id),
  );

  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addItemToCart({ product, quantity }));
  };

  return (
    <div className="product-page">
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <>
          <div className="product-image">
            <img src={data.image} alt={data.title} />
          </div>
          <div className="product-details">
            <h2>{data.title}</h2>
            <p>Price: ${data.price}</p>
            <p>Category: {data.category}</p>
            <p>Description: {data.description}</p>
            <p>Rating: {data.rating.rate}</p>
            <div className="add-to-cart">
              <select
                className="quantity-selector"
                value={quantity}
                onChange={handleQuantityChange}
              >
                {[...Array(10)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;

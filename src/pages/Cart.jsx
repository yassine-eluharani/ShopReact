import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  removeItemFromCart,
  updateCartItemQuantity,
} from "../store/cartReducer";
import "./styles/Cart.scss";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItemFromCart(item.product));
  };

  const handleQuantityChange = (cartItem, e) => {
    const newQuantity = parseInt(e.target.value, 10);
    dispatch(
      updateCartItemQuantity({ productId: cartItem.product.id, newQuantity }),
    );
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.product.price * cartItem.quantity;
    }, 0);
    return total.toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem, index) => (
            <tr key={index}>
              <td>
                <img
                  src={cartItem.product.image}
                  alt={cartItem.product.title}
                />
              </td>
              <td>{cartItem.product.title}</td>
              <td>
                <input
                  type="number"
                  value={cartItem.quantity}
                  onChange={(e) => handleQuantityChange(cartItem, e)} // Add this change handler
                  min="1" // Set a minimum value for the input
                />
              </td>
              <td>${cartItem.product.price}</td>
              <td>
                <button onClick={() => handleRemoveItem(cartItem)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">Total: ${calculateTotal()}</div>
    </div>
  );
};

export default Cart;

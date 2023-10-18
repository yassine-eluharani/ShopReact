import PropTypes from "prop-types";
import "./styles/ProductCard.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { title, image, price, rating, id } = product;
  return (
    <div className="product-card">
      <Link to={`/product/${id}`} key={id}>
        <img src={image} alt={title} />
        <div className="product-details">
          <h3 className="product-title">{title}</h3>
          <p className="product-price">Price: ${price}</p>
          <p className="product-rating">Rating: {rating.rate}</p>
        </div>
      </Link>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;

import { Link } from "react-router-dom";
import "./styles/NavBar.scss";
import { useSelector } from "react-redux";
import { selectCartItemsCount } from "../store/cartReducer";

const NavBar = () => {
  const cartItemCount = useSelector(selectCartItemsCount);
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">My cart ({cartItemCount})</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

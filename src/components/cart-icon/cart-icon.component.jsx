// import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectIsCartOpen, selectCartCount } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import "./cart-icon.styles.scss";
// import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  }

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
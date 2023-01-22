// import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../button/button.component";
// import { CartContext } from "../../contexts/cart.context";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const { name, price,  imageUrl } = product;
    // const { addItemToCart } = useContext(CartContext);
    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">₹{price}</span>
                <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
            </div>
        </div>
    )
}

export default ProductCard;
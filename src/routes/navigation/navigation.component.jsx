import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "../../assests/logo.svg";
import "./navigation.styles.scss";
// import { UserContext } from "../../contexts/user.context";
// import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
// import {
//     NavigationContainer,
//     LogoContainer,
//     NavLinks,
//     NavLink,
//   } from './navigation.styles';

const Navigation = () => {

    const currentUser =useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    // console.log(currentUser)
    // const { currentUser } = useContext(UserContext);
    // const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                        ) : (
                            <Link className="nav-link" to="/auth">
                                SIGN IN
                            </Link>
                        )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            {/* <NavigationContainer>
                <LogoContainer to='/'>
                    <Logo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>

                    {currentUser ? (
                    <NavLink as='span' onClick={signOutUser}>
                        SIGN OUT
                    </NavLink>
                    ) : (
                    <NavLink to='/auth'>SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer> */}
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
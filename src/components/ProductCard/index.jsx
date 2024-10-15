import { useCart } from "../../context/cart-context";
import { findProductInCart } from "../../utils/findProductInCart";
import { useNavigate } from "react-router-dom";
import { findProductInWishlist } from "../../utils/findProductInWishlist";

export const ProductCard = ({ product }) => {

    const { cart, wishlist, cartDispatch } = useCart();
    const navigate = useNavigate();

    const isProductInCart = findProductInCart(cart, product.id);
    const isProductInWishlist = findProductInWishlist(wishlist, product.id);

    const onCartClick = (product) => {
        !isProductInCart ?
            cartDispatch(
                {
                    type: "ADD_TO_CART",
                    payload: { product }
                }) : navigate('/cart');
    };

    const onWishlistClick = (product) => {
        !isProductInWishlist ?
            cartDispatch({
                type: 'ADD_TO_WISHLIST',
                payload: { product }
            }) : navigate('/wishlist');
    }

    return (
        <div className="card card-vertical d-flex direction-column relative shadow">
            <div className="card-image-container">
                <img className="card-image" src={product.images[0]} alt="shoes" />
            </div>
            <div className="card-details">
                <div className="card-title">{product.title}</div>
                <div className="card-des">
                    <p className="card-price">
                        ${product.price}
                    </p>
                </div>
                <div className="cta-btn">
                    <button onClick={() => onWishlistClick(product)} className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                        <span class="material-symbols-outlined">
                            {
                                isProductInWishlist ? 'heart_check' : 'favorite'
                            }
                        </span>
                        {
                            isProductInWishlist ? 'Go to Wishlist' : 'Add to Wishlist'
                        }
                    </button>
                    <button onClick={() => onCartClick(product)} className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                        <span class="material-symbols-outlined">
                            {
                                isProductInCart ? 'shopping_cart_checkout' : 'shopping_cart'
                            }

                        </span>
                        {
                            isProductInCart ? 'Go To Cart' : 'Add To Cart'
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
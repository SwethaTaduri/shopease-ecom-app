import { useCart } from "../../context";
import { findProductInWishlist } from "../../utils";
import { useNavigate } from "react-router-dom";

export const HorizontalCard = ({ product }) => {

    const { wishlist, cartDispatch } = useCart();

    const navigate = useNavigate();

    const isProductinWishlist1 = findProductInWishlist(wishlist, product.id)
    console.log("isproductinwishlist1", isProductinWishlist1);

    const onRemoveClick = (product) => {
        cartDispatch(
            {
                type: 'REMOVE_FROM_CART',
                payload: { id: product.id }
            }
        )
    };

    const onWishlistClick = (product) => {
        if (!isProductinWishlist1) {
            cartDispatch(
                {
                    type: 'ADD_TO_WISHLIST',
                    payload: { product }
                });
            cartDispatch(
                {
                    type: 'REMOVE_FROM_CART',
                    payload: { id: product.id }
                });
        } else {
            cartDispatch({
                type: 'REMOVE_FROM_CART',
                payload: { id: product.id }
            });

            // Navigate to the wishlist page
            navigate("/wishlist");
        }
    }

    return (
        <div className="card-horizontal d-flex shadow">
            <div className="card-hori-image-container relative">
                <img className="card-image" src={product.images[0]} alt="img" />
            </div>
            <div className="card-details d-flex direction-column">
                <div className="card-title">{product.title}</div>
                <div className="card-description">
                    <p className="card-price">{product.price} </p>
                </div>
                <div className="quantity-container d-flex gap">
                    <p className="q-title">Quantity: </p>
                    <div className="count-container d-flex align-center gap">
                        <button className="count">-</button>
                        <span className="count-value">1</span>
                        <button className="count">+</button>
                    </div>
                </div>
                <div className="cta-btn d-flex gap">
                    <div className="cta-btn">
                        <button onClick={() => onRemoveClick(product)} className="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
                            <span class="material-symbols-outlined text-3xl">
                                shopping_cart
                            </span>
                            Remove from Cart</button>
                    </div>
                    <div className="cta-btn">
                        <button onClick={() => onWishlistClick(product)} className="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
                            <span class="material-symbols-outlined text-3xl">
                                {
                                    isProductinWishlist1 ? "heart_check" : "favorite"
                                }
                            </span>
                            {
                                isProductinWishlist1 ? "Go to Wishlist" : "Add to Wishlist"
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const cartReducer = (state, { type, payload }) => {

    switch (type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, payload.product]
            };
        case "REMOVE_FROM_CART":
            return {
              ...state,
              cart: state.cart.filter(product=> product.id !== payload.id) 
            };
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishlist: [state.wishlist,payload.product]
            }
        default:
            return state
    }
}
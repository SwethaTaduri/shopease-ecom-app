import { createContext,useContext,useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const CartContext = createContext();

const CartProvider = ({children}) => {
 
const initialState = {
    cart:[],
    wishlist:[]
}

   const [{cart, wishlist},cartDispatch] = useReducer(cartReducer,initialState);

  return(
    <CartContext.Provider value={{ cart, wishlist, cartDispatch }}>
        {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext);


export { CartProvider, useCart };

/*It seems like the CartProvider and useCart setup in your code is correct and should ideally allow you to access the cart directly without needing to use cart.cart.length.

Since you are still facing the issue of having to use cart.cart.length instead of cart.length, one thing you can try is to directly destructure cart and cartDispatch inside the useCart hook like this:

const useCart = () => {
  const { cart, cartDispatch } = useContext(CartContext);
  return { cart, cartDispatch };
};
By doing this, you should be able to access cart.length directly in your components after using const { cart } = useCart();.

If you give this a try and still encounter the issue, feel free to let me know so I can further assist you in resolving it*/
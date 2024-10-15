import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogin, useCart } from "../../context";


export const NavBar = () => {

    const navigate = useNavigate();
    const { token, loginDispatch } = useLogin();
    const { cart, wishlist } = useCart();
    const [isAccountDropdownOpen, setisAccountDropdownOpen] = useState(false);

    const onLoginClick = () => {
        if (token?.access_token) {
            navigate("/auth/login");
        } else {
            loginDispatch({
                type: "logout",
            })
            navigate("/auth/login");
        }
    }
    return (
        <header className="flex p-4 bg-cyan-600 text-cyan-50">
            <h1 onClick={() => navigate('/')} className="text-3xl hover:cursor-pointer">ShopEase</h1>
            <nav className="ml-auto flex gap-6 hover:cursor-pointer">

                <div className="flex">
                    <span onClick={() => navigate('/')} className="material-symbols-outlined text-3xl">
                        home
                    </span>
                </div>
                <div className="flex">
                    <span onClick={() => navigate('/wishlist')} className="material-symbols-outlined text-3xl">
                        favorite
                    </span>
                    {
                        wishlist?.length > 0 &&
                        <span className="w-4 h-4 border border-cyan-50 rounded-full text-sm flex justify-center items-center"> {wishlist.length}   </span>
                    }

                </div>
                <div className="flex">
                    <span onClick={() => navigate('/cart')} className="material-symbols-outlined text-3xl">
                        shopping_cart
                    </span>
                    {
                        cart?.length > 0 && <span className="w-4 h-4 border border-cyan-50 rounded-full text-sm flex justify-center items-center"> {cart.length}  </span>
                    }
                </div>
                <div className="relative">
                    <span onClick={() => setisAccountDropdownOpen(!isAccountDropdownOpen)} className="material-symbols-outlined text-3xl">
                        account_circle
                    </span>
                    {
                        isAccountDropdownOpen && <div className="absolute bg-cyan-500 right-0 p-2">
                            <button onClick={onLoginClick}>
                                {
                                    token?.access_token ? "Logout" : "Login"
                                }
                            </button>
                        </div>
                    }

                </div>

            </nav>
        </header>
    )
}
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../../context/login-context";

export const NavBar = () => {

    const navigate = useNavigate();
    const { token, loginDispatch } = useLogin();
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
            <nav className="ml-auto flex gap-10 hover:cursor-pointer">
                <span onClick={() => navigate('/wishlist')} className="material-symbols-outlined text-3xl">
                    favorite
                </span>
                <span onClick={() => navigate('/cart')} className="material-symbols-outlined text-3xl">
                    shopping_cart
                </span>
                <div className="relative">
                    <span onClick={() => setisAccountDropdownOpen(!isAccountDropdownOpen)} className="material-symbols-outlined text-3xl">
                        account_circle
                    </span>
                    {
                        isAccountDropdownOpen && <div className="absolute bg-cyan-500">
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
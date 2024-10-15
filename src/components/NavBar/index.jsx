import { useNavigate } from "react-router-dom";

export const NavBar = () => {

    const navigate = useNavigate();

    return (
        <header className="flex p-4 bg-cyan-600 text-cyan-50">
<<<<<<< Updated upstream
            <h1 onClick={()=>navigate('/')} className="text-3xl hover:cursor-pointer">ShopEase</h1>
            <nav className="ml-auto flex gap-10 hover:cursor-pointer">
                <span onClick={()=> navigate('/wishlist')} className="material-symbols-outlined text-3xl">
                    favorite
                </span>
                <span onClick={()=> navigate('/cart')} className="material-symbols-outlined text-3xl">
                    shopping_cart
                </span>
                <span className="material-symbols-outlined text-3xl">
                    account_circle
                </span>
=======
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

>>>>>>> Stashed changes
            </nav>
        </header>
    )
}
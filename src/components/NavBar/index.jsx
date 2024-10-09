import { useNavigate } from "react-router-dom";

export const NavBar = () => {

    const navigate = useNavigate();

    return (
        <header className="flex p-4 bg-cyan-600 text-cyan-50">
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
            </nav>
        </header>
    )
}
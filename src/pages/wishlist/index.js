import { NavBar } from "../../components/NavBar";
import { WishlistCard } from "../../components/WishlistCard";
import { useCart } from "../../context/cart-context";
import { useNavigate } from "react-router-dom";

export const Wishlist = () => {

    const { wishlist } = useCart();
    const  navigate  = useNavigate();
    return (
        <>

            <NavBar />
            <main className="flex flex-col items-center pt-3">
                {
                    wishlist?.length > 0 ? (
                        <>
                            <h1 className="text-3xl"> My WishList </h1>
                            <div className="flex gap-5">
                                <div className="flex flex-col gap-4 pt-3">
                                    {
                                        wishlist?.length > 0 && wishlist.map(product => <WishlistCard key={product.id} product={product} />)
                                    }
                                </div>
                            </div>
                        </>
                    ) :

                        <div className="flex flex-col items-center">
                            <h2 className="text-3xl p-4"> WishList is Empty </h2>
                            <p onClick={() => navigate('/')} className="p-2 text-[#0891b2] underline hover:cursor-pointer text-2xl"> Click to add items to Wishlist </p>
                        </div>
                }

            </main>
        </>
    )

}
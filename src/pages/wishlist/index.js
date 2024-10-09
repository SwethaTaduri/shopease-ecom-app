import { NavBar } from "../../components/NavBar";
import { WishlistCard } from "../../components/WishlistCard";
import { useCart } from "../../context/cart-context";

export const Wishlist = () => {

    const { wishlist } = useCart();

    return (
        <>
            <NavBar />
            <main>

                {
                    wishlist.length > 0 ? wishlist.map(product => <WishlistCard key={product.id} product={product} />) : 'Wishlist is Empty'
                }

            </main>
        </>
    )

}
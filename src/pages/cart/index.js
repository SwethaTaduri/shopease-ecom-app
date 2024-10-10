import { NavBar, HorizontalCard, PriceDetails } from "../../components";
import { useCart } from "../../context";
import { useNavigate } from "react-router-dom";

export const Cart = () => {

    const { cart } = useCart();
    const navigate = useNavigate();

    return (

        <>
            <NavBar />
            <main className="flex flex-col items-center pt-3">
                {
                    cart.length > 0 ? (
                        <>
                            <h1 className="text-3xl"> My Cart </h1>
                            <div className="flex gap-5">
                                <div className="flex flex-col gap-4 pt-3">
                                    {
                                        cart.length > 0 && cart.map(product => <HorizontalCard key={product.id} product={product} />)
                                    }
                                </div>
                                <div>
                                    <PriceDetails />
                                </div>
                            </div>
                        </>
                    ) :

                        <div className="flex flex-col items-center">
                            <h2 className="text-3xl p-4"> Cart is Empty </h2>
                            <p onClick={() => navigate('/')} className="p-2 text-[#0891b2] underline hover:cursor-pointer text-2xl"> Click to add items to cart </p>
                        </div>
                }

            </main>
        </>
    )
}
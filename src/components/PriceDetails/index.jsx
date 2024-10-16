import { useCart } from "../../context"
import { getCartPrice } from "../../utils";

export const PriceDetails = () => {

    const { cart } = useCart();
    const totalCartPrice = getCartPrice(cart);
    const deliveryCharge = 29;
    
    return (
        <>
            <div className="w-[400px] bg-white p-4">
                <p className="text-2xl border-b"> Price Details </p>
                <div className="flex flex-col gap-4">
                    <div className="flex mb-6">
                        <p> Price ({cart.length}) Items </p>
                        <p className="ml-auto"> ${totalCartPrice} </p>
                    </div>
                    <div className="flex border-b mb-2" >
                        <p> Delivery Charges </p>
                        <p className="ml-auto"> ${deliveryCharge} </p>
                    </div>
                </div>
                <div className="flex mt-2">
                    <p> Total Amount </p>
                    <p className="ml-auto"> ${totalCartPrice + deliveryCharge } </p>
                </div>
                <div>
                    <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"> Place Order </button>
                </div>

            </div>
        </>
    )


}
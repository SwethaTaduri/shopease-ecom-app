import { NavBar } from "../../components/NavBar";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/getAllProducts";
import { ProductCard } from "../../components/ProductCard";
import { useCart } from "../../context/cart-context";

export const Home = () => {
    
    const [products,setProducts] = useState([]);
    
    const { cart , wishlist } = useCart();

    console.log("cart", cart);
    console.log("wishlist", wishlist);
    
    useEffect(() => {
        (async () => {
          const data = await getAllProducts();
          setProducts(data);
        }) ()
    },[]);

    return (
        <Fragment>
            <NavBar />
            <main className="flex flex-wrap gap-6 justify-center pt-8">
                {
                    products?.length>0 && products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </main>
        </Fragment>
    )
        
    
}
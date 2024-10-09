import { NavBar } from "../../components/NavBar";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/getAllProducts";
import { ProductCard } from "../../components/ProductCard";
import { useCart } from "../../context/cart-context";
import { getAllCategories } from "../../api/getAllCategories";
import { getProductsByCategory } from "../../utils/getProductsByCategory.js";


export const Home = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory,setSelectedCategory] = useState("All");

    const { cart, wishlist } = useCart();


    console.log("cart", cart);
    console.log("wishlist", wishlist);

    useEffect(() => {
        (async () => {
            const data = await getAllProducts();
            const categories1 = await getAllCategories();
            const updatedCategories = [...categories1,{id:"1a" , name:"All"}];
            setProducts(data);
            setCategories(updatedCategories);
        })()
    }, []);

    const onCategoryClick = (categoryName) => {
         setSelectedCategory(categoryName); 
    }
     
    //the attributes that we pass to getproductsbycategory have to be global values bcz of which we created the selectedcategories
    const filterByCategory = getProductsByCategory(products,selectedCategory);

    return (
        <Fragment>
            <NavBar />
            <main className="flex flex-col">
            <div className="flex flex-wrap pt-3 gap-3 justify-center items-center">
                    {
                        categories?.length > 0 && categories.map(category=> <div key={category.id} className="text-cyan-50 text-sm bg-cyan-600 p-2 rounded-lg hover:cursor-pointer" onClick={()=> onCategoryClick(category.name)}> {category.name} </div>)
                    }
                </div>
                <div className="flex flex-wrap gap-6 justify-center pt-8">
                    {
                        filterByCategory?.length > 0 ? filterByCategory.map(product => <ProductCard key={product.id} product={product} />) : <h2>No Products found.Please try with another category</h2>
                    }
                </div>
            </main>
        </Fragment>
    )


}
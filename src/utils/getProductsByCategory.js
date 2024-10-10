export const getProductsByCategory = (products, categoryName) => {
     return categoryName.toLowerCase() === "all"
          ? products
          : products.filter(product => product.category.name.toLowerCase() === categoryName.toLowerCase());
}
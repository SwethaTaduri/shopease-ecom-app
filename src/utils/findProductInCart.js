export const findProductInCart = (cart, id) => {

    // Check if the cart exists and has items
    if (cart?.length > 0) {
        const result = cart.some(product => Number(product.id) === Number(id));
        return result;
    }

};



export const findProductInCart = (cart, id) => {

    if (cart?.length > 0) {
        const result = cart.some(product => Number(product.id) === Number(id));
        return result;
    }

};



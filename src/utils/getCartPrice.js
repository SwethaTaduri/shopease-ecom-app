export const getCartPrice = ( cart ) => {
   return cart?.length > 0 && cart.reduce((acc,cur)=> acc+cur.price,0);
}
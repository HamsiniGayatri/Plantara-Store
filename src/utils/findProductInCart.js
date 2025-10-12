
export const findProductInCart = (cart,id) => cart?.length > 0 && cart.some(product=>product.id === id)

//some is used to verify an elemnet is true or not
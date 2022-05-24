export const countAllItemsInCart = (cart) => {

	return cart.reduce((acc, item) => acc + item.quantity, 0);
};

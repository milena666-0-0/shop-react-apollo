export const countTotalSum = (products, selectedCurrency = "$") => {
	return products
		.map((item) => {
			const selectedPrice = item.prices.find(
				(price) => price.currency.symbol === selectedCurrency
			);

			return Math.ceil(selectedPrice.amount) * item.quantity;
		})

		.reduce((acc, value) => {
			return acc + value;
		}, 0);
};
